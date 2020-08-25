import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '@env';
import { OrganizationService,
  UserService,
  PositionConfigurationService,
  LocationService,
  JobService,
  EventService } from '@services';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import * as Moment from 'moment';
import * as MomentRange from 'moment-range';
import { MongoService } from 'wacom';
import { OrgmailComponent } from '@modals';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public events = [];
  public pastEvents = [];
  public upcomingEvents = [];
  public user;
  public positionConfigurationMap = {};
  public filterForm: FormGroup;
  public allPastEvents = [];
  public allUpcomingEvents = [];
  public expandFlyout = false;
  public columnHeaders = [
    "title",
    "venue",
    "position",
    "date",
    "time"
  ];
  public originalColumnHeaders = [];

  constructor(public http: HttpClient,
    private modalService: NgbModal,
    public mongo: MongoService,
    public us: UserService,
    private es: EventService,
    private ls: LocationService,
    public storage: LocalStorageService,
    public os: OrganizationService,
    public js: JobService,
    private positionConfigurationService: PositionConfigurationService,
    public formBuider: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.formBuider.group({
      filter: new FormControl('')
    });
    this.filterForm.controls.filter.valueChanges.subscribe((change) => {
      this.upcomingEvents = this.search(change, 'allUpcomingEvents');
      this.pastEvents = this.search(change, 'allPastEvents');
    });
    // this.http.get(environment.applicationURI + '/api/getEvents/' + this.us.user._id).subscribe((res: Array<any>) => {
    //   this.events = res;
    //   this.sortEvents();
    //   this.allUpcomingEvents = this.upcomingEvents;
    //   this.allPastEvents = this.pastEvents;
    // });
    this.mongo.on('event', ()=>{
      this.events = this.es.events || [];
      this.sortEvents();
      this.allUpcomingEvents = this.upcomingEvents;
      this.allPastEvents = this.pastEvents;
    });

    this.positionConfigurationService.getPositions(this.us.user.organizations[0]._id).subscribe(data => {
      if (data) {
        Object.keys(data).forEach(key => {
          this.positionConfigurationMap[key] = data[key].label;
        });
      }
      this.positionConfigurationMap['Creator'] = 'Creator';
    });
  }

  search(text, index): any {
    return this[index].filter(event => {
      const term = text.toLowerCase();
      return event.title.toLowerCase().includes(term)
          || event.location.address.toLowerCase().includes(term)
          || this.positionConfigurationMap[event.position].toLowerCase().includes(term)
          || event.date.toLowerCase().includes(term)
          || event.time.toLowerCase().includes(term)
          || event.labels.toLowerCase().includes(term);
    });
  }

  showConfigModal(): void {
    this.expandFlyout = !this.expandFlyout;
  }

  cancelConfig(): void {
    this.expandFlyout = false;
    this.columnHeaders = [ ...this.originalColumnHeaders ];
  }

  createDynmicColumnModel(event): any {
    if (!event.dynamicColumns) {
      event.dynamicColumns = {};
    }
    this.columnHeaders.forEach((header) => {
      if (event) {
        event.dynamicColumns[header] = '';
      }
      event.dynamicColumns[header] = this.getValueFromHeader(header, event);
    });
    return event;
  }

  getValueFromHeader(header, event): any {
    let value;
    header = header.toLowerCase();
    switch(header) {
      case 'title':
        value = event.title;
        break;
      case 'venue':
        if(!isNullOrUndefined(event.location))
         value = event.location.address;
        break;
      case 'position':
        if (event && event.position) {
          if (this.positionConfigurationMap[event.position]) {
            value = this.positionConfigurationMap[event.position];
          } else {
            value = 'Creator';
          }
        }
        break;
      case 'date':
        value = event.date;
        break;
      case 'time':
        value = event.time;
        break;
      default:
        break;
    }
    return value;
  }

  sortEvents(): void {
    this.mongo.on('job', ()=>{
      this.events.forEach((event) => {
        event.dates.forEach((date) => {
          if(!this.js.assigned_by_day[date+this.us.user._id+event._id]
            &&!this.us.user.isAdmin) return;
          let userEvent = Object.assign({}, event);
          userEvent.date = date;
          userEvent.time = event.times[date] && event.times[date].time || 'N/A';
          userEvent.position = 'Creator';
          userEvent = this.createDynmicColumnModel(userEvent);
          if (new Date(userEvent.date).getTime() < Date.now()) {
            this.pastEvents.push(userEvent);
          } else {
            this.upcomingEvents.push(userEvent);
          }
        });
      });
    });

    function compare(a, b) {
      const eventDateTimeA = new Date(a.date).getTime();
      const eventDataTimeB = new Date(b.date).getTime();

      let comparison = 0;
      if (eventDateTimeA < eventDataTimeB) {
        comparison = 1;
      } else if (eventDateTimeA > eventDataTimeB) {
        comparison = -1;
      }
      return comparison;
    }

    this.pastEvents.sort(compare);
    this.upcomingEvents.sort(compare);
  }
  // Handle the click event to prevent prematurely opening an event
  handleActions(mouseEvent: MouseEvent) {
    mouseEvent.stopPropagation();
  }

  // Remove the user from the event making it available for another user to take it
  removeUser(event: any, eventDate) {

    const newlyAvailablePosition = { date: eventDate,
      callTime: '',
      position: '',
      oldCrewId: '',
      organizationId: this.us.user.organizations[0]._id,
      isNew: true
    };

    event.crew[eventDate].forEach((crew) => {
      if (crew._id === this.us.user._id) {
        crew.isAvailable = true;

        newlyAvailablePosition.callTime = crew.callTime;
        newlyAvailablePosition.position = crew.position;
        newlyAvailablePosition.oldCrewId = crew._id;

        event.hasAvailability = true;
      }
    });

    event.removedUser = this.us.user;
    event.availablePosition = newlyAvailablePosition;

    this.http.post(environment.applicationURI + '/api/updateEvent', event).subscribe((res: any) => {
      // TODO: Remove the button, because the slot is now available to be grabbed.
      this.storage.store('alert', {
        type: 'success',
        message: 'Your position is now available to others!'
      });
    });
  }
  deleteEvent(event: any) {
    if (confirm('Are you sure you want to delete ' + event.title + '?')) {
      this.http.delete(environment.applicationURI + '/api/deleteEvent/' + event._id).subscribe((res: any) => {
        this.storage.store('alert', {
          type: 'success',
          message: 'Event has been successfully deleted!'
        });
        this.upcomingEvents = this.upcomingEvents.filter(function(element, index, arr) {
          return element._id !== event._id;
        });
        this.pastEvents = this.pastEvents.filter(function(element, index, arr) {
          return element._id !== event._id;
        });
    });
    }
  }
  create_event(event){
    this.es.create(event, (newEvent:any)=>{
      this.events.push(newEvent);
      this.sortEvents();
      this.allUpcomingEvents = this.upcomingEvents;
      this.allPastEvents = this.pastEvents;
      this.http.post(environment.applicationURI + '/api/updateUserEvents/' + newEvent._id, {
        listOfUsers: [this.us.user._id]
      }).subscribe(response => {});
    }, false);
  }
  public import(files: FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: any = reader.result as string;
        csv = csv.match(/[^\r\n]+/g);
        for(let i = 0; i < csv.length; i++){
          csv[i] = csv[i].split(',');
        }
        let fields = csv.shift();
        for(let i = 0; i < csv.length; i++){
          let obj = {};
          for(let j = 0; j < fields.length; j++){
            obj[fields[j]] = csv[i][j];
          }
          csv[i] = obj;
        }
        if(csv.length){
          for (let i = 0; i < csv.length; i++){
            let event:any = {times: {}, crew: {}}, create = false;
            if(!csv[i] || typeof csv[i] != 'object') continue;
            if(csv[i]['"Title"']){
              event.title = csv[i]['"Title"'].split('"').join('');
            }
            if(csv[i]['"Description"']){
              event.description = csv[i]['"Description"'].split('"').join('');
            }
            if(csv[i]['"Start Date"'] && csv[i]['"End Date"']){
              event.startDate = csv[i]['"Start Date"'];
              event.endDate = csv[i]['"End Date"'];
              const range = MomentRange.extendMoment(Moment).range(event.startDate, event.endDate);
              const newDates = Array.from(range.by('days'));
              let days = [];
              newDates.forEach((date) => {
                let newDate = Moment(date).format('MM/DD/YYYY').toString();
                days.push(newDate);
              });
              if(csv[i]['"Times From"']){
                let times = csv[i]['"Times From"'];
                times = times.split('"').join('').split(';');
                for (let i = 0; i < days.length; i++){
                  if(times[i]){
                    event.times[days[i]] = times[i];
                  }
                }
              }
              if(csv[i]['"Times To"']){
                let times = csv[i]['"Times To"'];
                times = times.split('"').join('').split(';');
                for (let i = 0; i < days.length; i++){
                  if(times[i]){
                    event.times['to'+days[i]] = times[i];
                  }
                }
              }
              if(csv[i]['"Crew"']){
                let crew = csv[i]['"Crew"'];
                crew = crew.split('"').join('').split(';');
                for (let i = 0; i < days.length; i++){
                  if(crew[i]){
                    crew[i] = crew[i].split('|');
                    event.crew[days[i]] = {
                      position: crew[i][0]||'',
                      rate: crew[i][1]||0,
                      callTime: crew[i][2]&&crew[i][2].toUpperCase()||'05:00PM'
                    };
                  }
                }
              }
            }
            if(csv[i]['"Venue"'] && this.ls._locations[csv[i]['"Venue"'].split('"').join('')]){
              event.location = this.ls._locations[csv[i]['"Venue"'].split('"').join('')]._id;
            }
            if(csv[i]['"Labels"']){
              event.labels = csv[i]['"Labels"'].split('"').join('').split(';').join(', ');
            }
            if(Object.keys(event).length>2){
              this.create_event(event);
            }
          }
        }
      }
    }
  }
  sendEmail(){
    const modalRef = this.modalService.open(OrgmailComponent, {size: 'lg'});
  }
}
