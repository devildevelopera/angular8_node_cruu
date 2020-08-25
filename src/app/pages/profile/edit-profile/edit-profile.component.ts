import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '@env';
import { OrganizationService, UserService, GroupService,
  PositionConfigurationService } from '@services';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  @Input() user:any;
  constructor(public http: HttpClient,
    public ps: PositionConfigurationService,
    public gs: GroupService,
    public us: UserService,
    private storage: LocalStorageService,
    public os: OrganizationService) {}
  public dropdownSettings = {
    singleSelection: false,
    idField: 'value',
    textField: 'label',
    selectAllText: 'Select All',
    unSelectAllText: 'Unselect All'
  };
  update_position(org, pos) {
    this.storage.store('user', this.us.user);
    for (let i = 0; i < this.us.users.length; i++){
      if(this.us.users[i]._id==this.us.user._id){
        for (let each in this.us.user){
          this.us.users[i][each] = this.us.user[each];
        }
        break;
      }
    }
    this.http.post(environment.applicationURI+'/api/updateUserPositions/'+this.us.user._id+'/'+org, pos).subscribe((res: any) => {});
  }
  update_group(group){
    for (let i = group.users.length-1; i >= 0; i--){
        if(group.users[i] == this.us.user._id){
          group.users.splice(i, 1);
        }
    }
    if(group._users[this.user._id]){
      group.users.push(this.user._id);
    }
    this.gs.selected[group._id+this.user._id] = group._users[this.user._id];
    this.gs.update(group);
  }
}
