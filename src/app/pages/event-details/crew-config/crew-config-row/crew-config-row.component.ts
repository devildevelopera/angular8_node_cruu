import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Broadcaster } from '../../../../utils/broadcaster';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'underscore';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService, OrganizationService } from '@services';

@Component({
  selector: 'app-crew-config-row',
  templateUrl: './crew-config-row.component.html',
  styleUrls: ['./crew-config-row.component.scss']
})
export class CrewConfigRowComponent implements OnInit {
  @Input() crew;
  @Input() isLast;
  @Input() isEven;
  @Input() deleteCrew;
  @Input() date;
  @Input() positionList;
  @Input() index;
  @Input() crewList;
  @Input() allAvailableCrew;
  @Input() dateCrew;
  hasSchedulingError = false;
  public time;
  crewForm: FormGroup;
  originalCrew;
  fixedError = false;
  private inited:any = false;
  constructor(public broadcaster: Broadcaster,
    public us: UserService,
    public os: OrganizationService,
    public storage: LocalStorageService,
    public router: Router,
    public formBuilder: FormBuilder){
    setTimeout(()=>{
      this.inited = true;
    }, 1000);
  }

  ngOnInit() {
    this.originalCrew = {
      callTime: this.crew.callTime,
      endTime: this.crew.endTime,
      position: this.crew.position,
      selectedCrewId: this.crew._id,
      fixed: this.crew.fixed,
      extra: this.crew.extra,
      comment: this.crew.comment,
      rate: this.crew.rate
    };
    this.crewForm = this.formBuilder.group({
      position: new FormControl(this.crew.position, Validators.required),
      selectedCrewId: new FormControl(this.crew._id),
      callTime: new FormControl(this.crew.callTime),
      endTime: new FormControl(this.crew.endTime),
      fixed: new FormControl(this.crew.fixed),
      extra: new FormControl(this.crew.extra),
      comment: new FormControl(this.crew.comment),
      rate: new FormControl(this.crew.rate)
    });
    this.onChanges();
  }

  onChanges(): void {
    this.crewForm.valueChanges.subscribe(val => {
      if (!_.isEqual(val, this.originalCrew)) {
        let change = this.getFieldChanged(val);
        if (change === 'name') {
          if (this.isCrewAlreadyAssigned(this.crewForm.controls.selectedCrewId.value)) {
            this.hasSchedulingError = true;
          } else {
            if (this.hasSchedulingError === true) {
              this.fixedError = true;
            }
            this.hasSchedulingError = false;
          }
        }
        this.addToDate(change);
      } else {
        this.hasSchedulingError = false;
        this.fixedError = true;
        this.addToDate();
      }
    });
  }
  getFieldChanged(val): string {
    if (val.position !== this.originalCrew.position) return 'position';
    if (val.hour !== this.originalCrew.hour) return 'time';
    if (val.minute !== this.originalCrew.minute) return 'time';
    if (val.meridian !== this.originalCrew.meridian) return 'time';
    if (val.rate !== this.originalCrew.rate) return 'rate';
    if (val.fixed !== this.originalCrew.fixed) return 'fixed';
    if (val.extra !== this.originalCrew.extra) return 'extra';
    if (val.comment !== this.originalCrew.comment) return 'comment';
    if (val.selectedCrewId !== this.originalCrew._id) return 'name'
    return 'None'
  }
  public time_picked;
  public time_picked_end;
  addToDate(change?): void {
    this.us.afterWhile(this, ()=>{
      this.broadcaster.emit('editCrewOnDate', {
        index: this.index,
        date: this.date,
        time: this.time_picked.time,
        timeEnd: this.time_picked_end.time,
        position: this.crewForm.controls.position.value,
        selectedCrewId: this.crewForm.controls.selectedCrewId.value,
        ...(this.crew._id && {oldCrewId: this.crew._id}),
        rate: this.crewForm.controls.rate.value,
        fixed: this.crewForm.controls.fixed.value,
        extra: this.crewForm.controls.extra.value,
        comment: this.crewForm.controls.comment.value,
        field: change,
        oldTime: this.crew.callTime,
        oldEndTime: this.crew.endTime,
        oldRate: this.crew.rate,
        oldFixed: this.crew.fixed,
        oldComment: this.crew.comment,
        oldPosition: this.crew.position,
        ...(this.hasSchedulingError && { hasSchedulingError: this.hasSchedulingError }),
        ...(this.fixedError && { fixedError: this.fixedError})
      });
    });
  }

  handleClick(): void {
    this.broadcaster.emit('removeCrewFromDate', {
      crewId: this.crew._id,
      date: this.date
    });
  }

  isCrewAlreadyAssigned(newCrewId): boolean {
    const existsOnDate = this.dateCrew.findIndex(x => (x._id === newCrewId));
    return existsOnDate >= 0;
  }
  update_time(time_picked){
    this.time_picked = time_picked;
    if(this.inited) this.addToDate();
  }
  update_time_end(time_picked){
    this.time_picked_end = time_picked;
    if(this.inited) this.addToDate();
  }
  create_job(){
    let event = this.storage.retrieve('event');
    localStorage.setItem('new_job', JSON.stringify({
      position: this.crewForm.controls.position.value,
      rate: this.crewForm.controls.rate.value,
      fixed: this.crewForm.controls.fixed.value,
      comment: this.crewForm.controls.comment.value,
      venueName: event.location && event.location.venueName,
      times: {
        from: this.time_picked,
        to: this.time_picked_end
      },
      title: event.title,
      event: event._id,
      date: this.date,
      active: true
    }));
    this.router.navigate(['job/new']);
  }

}
