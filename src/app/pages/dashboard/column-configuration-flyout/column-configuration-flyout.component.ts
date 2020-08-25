import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserService, OrganizationService } from '@services';

@Component({
  selector: 'app-column-configuration-flyout',
  templateUrl: './column-configuration-flyout.component.html',
  styleUrls: ['./column-configuration-flyout.component.scss']
})
export class ColumnConfigurationFlyoutComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Input() expandFlyout;
  @Input() columnHeaders;
  public hasChanges = false;
  public columnForm: FormGroup;
  public originalColumns = [];
  public addedIndexes = [];
  public removedIndexes = [];
  public columnOptions = [
    "title",
    "venue",
    "position",
    "date",
    "time"
  ];
  public defaultOptions = [
    "title",
    "venue",
    "position",
    "date",
    "time"
  ];
  public username;
  constructor(public storage: LocalStorageService,
    public os: OrganizationService,
    public us: UserService,
    public formBuilder: FormBuilder,
    public http: HttpClient) { }

  ngOnInit() {
    if (this.us.user) {
      this.username = this.us.user.email;
      if (this.us.user.columnHeaderConfiguration) {
        this.columnHeaders = [ ...this.us.user.columnHeaderConfiguration];
      } else {
        this.originalColumns = [ ...this.columnHeaders ];
      }
    }
    if (this.columnHeaders.length < 1) {
      this.columnHeaders = [ ...this.defaultOptions ];
    }
    this.columnForm = this.formBuilder.group({});
    this.columnHeaders.forEach((header, index) => {
      this.columnForm.addControl(index, new FormControl(header));
    });
  }

  toggle(): void {
    this.expandFlyout = false;
  }

  addColumn(): void {
    this.columnForm.addControl(this.columnHeaders.length, new FormControl(''));
    this.columnHeaders.push('');
    this.addedIndexes.push(this.columnHeaders.length);
    this.hasChanges = true;
  }

  addColumnValue(index, option): void {
    this.columnHeaders[index] = this.columnForm.controls[index].value;
    this.hasChanges = true;
  }

  removeColumn(index): void {
    this.columnHeaders.splice(index, 1);
    this.columnForm.removeControl(index);
    this.removedIndexes.push(index)
    this.columnHeaders = this.columnHeaders;
    this.hasChanges = true;
  }

  cancelChanges(): void {
    this.addedIndexes.forEach((index) => {
      this.columnForm.removeControl(index);
    });
    this.removedIndexes.forEach((index) => {
      this.columnForm.addControl(index, new FormControl(this.originalColumns[index]));
    });
    this.columnHeaders = [ ...this.originalColumns ];
    this.onCancel.emit(this.columnHeaders);
    this.addedIndexes = [];
    this.hasChanges = false;
  }

  saveConfiguration(): void {
    this.http.put('api/updateDashboardConfiguration',{
      username: this.username,
      columnHeaders: this.columnHeaders
    }).subscribe((res: any) => {
      this.us.user = res;
      this.storage.store('user', res.data);
      this.expandFlyout = false;
    });
  }
}
