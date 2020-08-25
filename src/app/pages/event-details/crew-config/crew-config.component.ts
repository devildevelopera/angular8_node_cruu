import { Component, OnInit, Input } from '@angular/core';
import { Broadcaster } from '../../../utils/broadcaster';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '@env';
import { UserService, OrganizationService, JobService } from '@services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobComponent, JobvComponent } from '@modals';

@Component({
  selector: 'app-crew-config',
  templateUrl: './crew-config.component.html',
  styleUrls: ['./crew-config.component.scss']
})
export class CrewConfigComponent implements OnInit {
  @Input() datesList;
  @Input() eventData;
  @Input() event;
  @Input() times;
  @Input() positionConfigurationMap;
  isAdding = false;
  public dates = []
  public positionList = [];
  public allAvailableCrew = [];
  public crewList = [];
  public selectedCrew = {};
  public newCrewForm: FormGroup;
  public newUserError = false;

  public appliedAll = false;

  constructor(public broadcaster: Broadcaster,
    public js: JobService,
    private modalService: NgbModal,
    public us: UserService,
    public os: OrganizationService,
    public http: HttpClient,
    public formBuilder: FormBuilder) {}
  createCrew() {
    const modalRef = this.modalService.open(JobComponent, {size: 'lg'});
    if(this.datesList.length){
      modalRef.componentInstance.dates = this.datesList;
      for (let i = 0; i < this.datesList.length; i++){
        modalRef.componentInstance._dates[this.datesList[i]] = true;
      }
      modalRef.componentInstance.job.times.from = this.eventData.times[this.datesList[0]];
      modalRef.componentInstance.job.times.to = this.eventData.times['to'+this.datesList[0]];
    }
    modalRef.componentInstance.job.event = this.eventData._id;
    modalRef.componentInstance.job.org = this.eventData.organizationId;
  }
  edit(job) {
    const modalRef = this.modalService.open(JobComponent, {size: 'lg'});
    modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
    modalRef.componentInstance.init();
    modalRef.componentInstance.save.subscribe((saved) => {
      for (let each in saved){
          job[each] = saved[each];
      }
      for (let each in job){
          job[each] = saved[each];
      }
    });
  }
  view(job) {
    const modalRef = this.modalService.open(JobvComponent, {size: 'lg'});
    modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
    modalRef.componentInstance.save.subscribe((saved) => {
      for (let each in saved){
        job[each] = saved[each];
      }
      for (let each in job){
        job[each] = saved[each];
      }
    });
  }

  ngOnInit() {
    this.newCrewForm = this.formBuilder.group({});
    let keys = Object.keys(this.event);
    this.dates = keys;
    this.broadcaster.listen('updateCrewDateTabs').subscribe((res) => {
      this.event = res.data;
      let keys = Object.keys(this.event);
      this.dates = keys;
    });
    this.broadcaster.listen('removeCrewFromDate').subscribe((res) => {
      this.removeCrewFromDate(res.data);
    });
    this.broadcaster.listen('editCrewOnDate').subscribe((res) => {
      if (res.data.hasSchedulingError) {
        this.event[res.data.date][res.data.index].hasSchedulingError = true;
        this.newUserError = true;
      } else {
        if (res.data.fixedError) {
          this.event[res.data.date][res.data.index].hasSchedulingError = null;
          this.newUserError = false;
        }
        let newCrewIndex = this.allAvailableCrew.findIndex(user => user._id === res.data.selectedCrewId);
        let oldCrewIndex = res.data.oldCrewId ? this.allAvailableCrew.findIndex(crew => crew._id === res.data.oldCrewId) : -1;
        let newCrew: any = {};
        let oldCrew = 'N/A';
        if (oldCrewIndex !== -1) {
          oldCrew = this.allAvailableCrew[oldCrewIndex].firstName + ' ' + this.allAvailableCrew[oldCrewIndex].lastName;
        }
        if (newCrewIndex !== -1) {
          newCrew = this.allAvailableCrew[newCrewIndex];
        }
        newCrew.callTime = res.data.time;
        newCrew.endTime = res.data.timeEnd;
        newCrew.position = res.data.position;
        newCrew.rate = res.data.rate;
        newCrew.fixed = res.data.fixed;
        newCrew.extra = res.data.extra;
        newCrew.comment = res.data.comment;
        this.event[res.data.date][res.data.index] = newCrew;
        let oldValue = '';
        let newValue = '';
        if (res.data.field === 'time') {
          oldValue = res.data.oldTime;
          newValue = res.data.time;
        }
        if (res.data.field === 'timeEnd') {
          oldValue = res.data.oldEndTime;
          newValue = res.data.timeEnd;
        }
        if (res.data.field === 'name') {
          oldValue = oldCrew;
          newValue = newCrew.firstName + ' ' + newCrew.lastName;
        }
        if (res.data.field === 'rate') {
          oldValue = res.data.oldRate;
          newValue = res.data.rate;
        }
        if (res.data.field === 'fixed') {
          oldValue = res.data.oldFixed;
          newValue = res.data.fixed;
        }
        if (res.data.field === 'extra') {
          oldValue = res.data.oldExtra;
          newValue = res.data.extra;
        }
        if (res.data.field === 'comment') {
          oldValue = res.data.oldComment;
          newValue = res.data.comment;
        }
        if (res.data.field === 'position') {
          oldValue = res.data.oldPosition;
          newValue = res.data.position;
        }
        const audit = {
          user: {
            name: this.us.user.firstName + ' ' + this.us.user.lastName,
            _id: this.us.user._id
          },
          oldValue: oldValue,
          newValue: newValue,
          action: 'edit',
          section: 'Crew',
          field: res.data.field,
          time: Date.now(),
          forDate: res.data.date
        };
        this.saveCrewToDate(null, audit);
      }
    });
    const organizationId = this.us.user.organizations[0]._id;
    this.http.get(environment.applicationURI + '/api/getConfig/' + organizationId).subscribe((res: any) => {
      const configurations = res;
      if (configurations) {
        const configKeys = Object.keys(configurations);
        configKeys.forEach((key) => {
          this.positionList.push(configurations[key]);
        });
      }
    });
    this.http.get(environment.applicationURI + '/api/getCrewUsers/' + organizationId).subscribe((res: any) => {
      this.allAvailableCrew = res;
      this.crewList = [];
      this.allAvailableCrew.forEach((crew) => {
        if (crew._id != this.us.user._id) {
          this.crewList.push({
            value: crew._id,
            label: crew.firstName + ' ' + crew.lastName
          });
        }
      });
    });

    this.onChanges();
  }

  onChanges(): void {
    this.newCrewForm.valueChanges.subscribe((data) => {
      this.newUserError = false;
      this.appliedAll = false;
    });
  }

  selectCrew(): void {
    if (this.newCrewForm.controls.selectedCrewId.value === '') {
      this.selectedCrew = {};
    } else {
      this.allAvailableCrew.forEach((crew) => {
        if (crew._id === this.newCrewForm.controls.selectedCrewId.value) {
          this.selectedCrew = crew;
        }
      });
    }
  }

  saveCrewToDate(date?, auditChange?, skipUpdate?): void {
    if (this.isAdding) {
      const newCrewObject: any = this.selectedCrew;
      newCrewObject.position = this.newCrewForm.controls.selectedPosition.value;
      newCrewObject.rate = this.newCrewForm.controls.crewRate.value;
      newCrewObject.fixed = this.newCrewForm.controls.crewFixed.value;
      newCrewObject.extra = this.newCrewForm.controls.crewExtra.value;
      newCrewObject.comment = this.newCrewForm.controls.crewComment.value;
      //const callTime = this.newCrewForm.controls.hour.value + ':' + this.newCrewForm.controls.minute.value + this.newCrewForm.controls.meridian.value;
      //newCrewObject.callTime = callTime;
      if(!this.time_picked) return;
      newCrewObject.callTime = this.time_picked.time;
      if(!this.time_picked_end) return;
      newCrewObject.endTime = this.time_picked_end.time;
      if (this.isCrewAlreadyAssigned(this.event, date, newCrewObject._id)) {
        this.newUserError = true;
      } else {
        this.event[date].push(newCrewObject);
        auditChange = {
          user: {
            name: this.us.user.firstName + ' ' + this.us.user.lastName,
            _id: this.us.user._id
          },
          oldValue: '',
          newValue: newCrewObject.firstName ? newCrewObject.firstName + ' ' + newCrewObject.lastName : newCrewObject.position,
          action: 'add',
          section: 'Crew',
          field: 'all',
          time: Date.now(),
          forDate: date
        };
      }
    }
    if (!this.newUserError && !skipUpdate) {
      const data = {
        crew: this.event,
        ...(auditChange && { auditChange: auditChange })
      };
      this.broadcaster.emit('updateCrewObject', data);
      this.isAdding = false;
    }
  }

  isCrewAlreadyAssigned(event, date, newCrewId): boolean {
    if (newCrewId) {
      const existsOnDate = event[date].findIndex(x => (x._id === newCrewId));
      return existsOnDate >= 0;
    }
    return false;
  }

  applyDatesCrewToAll(date): void {
    this.appliedAll = true;
    this.saveCrewToDate(date, null, true);

    const crewToCopy = this.event[date];
    this.dates.forEach((dateIndex) => {
      this.event[dateIndex] = crewToCopy;
    });

    const audit = {
      user: {
        name: this.us.user.firstName + ' ' + this.us.user.lastName,
        _id: this.us.user._id
      },
      oldValue: date,
      newValue: 'N/A',
      action: 'add',
      section: 'Crew',
      field: 'all',
      time: Date.now(),
      forDate: 'all'
    };
    if (!this.newUserError) {
      const data = {
        crew: this.event,
        auditChange: audit
      };
      this.broadcaster.emit('updateCrewObject', data);
      this.isAdding = false;
    }
  }

  removeAll(jobs): void {
    for (let i = 0; i < jobs.length; i++){
      this.js.delete(jobs[i]);
    }
  }

  removeCrewFromDate(crewObject): void {
    let crewId = crewObject.crewId;
    let date = crewObject.date;
    let oldValue = '';
    this.event[date].forEach((crew, index) => {
      if (crew._id === crewId) {
        if (crew.hasSchedulingError && this.newUserError) {
          crew.hasSchedulingError = false;
          this.newUserError = false;
        }
        if (this.event[date][index].firstName) {
          oldValue = this.event[date][index].firstName + ' ' + this.event[date][index].lastName;
        } else {
          oldValue = this.event[date][index].position;
        }
        this.event[date].splice(index, 1);
      }
    });
    const audit = {
      user: {
        name: this.us.user.firstName + ' ' + this.us.user.lastName,
        _id: this.us.user._id
      },
      oldValue: oldValue,
      newValue: '',
      action: 'remove',
      section: 'Crew',
      field: 'all',
      time: Date.now(),
      forDate: date
    }
    const data = {
      crew: this.event,
      auditChange: audit
    };
    this.broadcaster.emit('updateCrewObject', data);
  }

  addCrew(): void {
    this.newCrewForm.addControl('selectedCrewId', new FormControl('', Validators.required));
    this.newCrewForm.addControl('selectedPosition', new FormControl('', Validators.required));
    this.newCrewForm.addControl('crewRate', new FormControl('', Validators.required));
    this.newCrewForm.addControl('crewFixed', new FormControl('', Validators.required));
    this.newCrewForm.addControl('crewExtra', new FormControl('', Validators.required));
    this.newCrewForm.addControl('crewComment', new FormControl('', Validators.required));
    this.isAdding = true;
  }
  private time_picked:any={};
  update_time(time_picked){
    this.time_picked = time_picked;
    this.saveCrewToDate();
  }
  private time_picked_end:any={};
  update_time_end(time_picked_end){
    this.time_picked_end = time_picked_end;
    this.saveCrewToDate();
  }

  close(): void {
    this.newCrewForm.reset();
    this.isAdding = false;
  }

  toggleCrewModal(date): void {
    let object = {
      date: date,
      event: this.event[date]
    }
    this.broadcaster.emit('toggleCrewModal', object);
  }

}
