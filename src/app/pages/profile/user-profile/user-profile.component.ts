import { Component, OnInit, Input } from '@angular/core';
import { OrganizationService,
  PositionConfigurationService,
  UserService,
  JobService } from '@services';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() profile;
  @Input() user;

  public pastEvents = [];
  public positionConfigurationMap = {};
  public columnHeaders = [
    'title',
    'venue',
    'position',
    'date',
    'rating',
    'comment'
  ];
  constructor(public os: OrganizationService,
    public us: UserService,
    public js: JobService,
    public http: HttpClient,
    private positionConfigurationService: PositionConfigurationService,
    private route: ActivatedRoute){}
  ngOnInit() {
    this.positionConfigurationService.getPositions(this.os.org._id).subscribe(data => {
      if (data) {
        Object.keys(data).forEach(key => {
          this.positionConfigurationMap[key] = data[key].label;
        });
      }
      this.positionConfigurationMap['Creator'] = 'Creator';
    });
    this.route.queryParams.subscribe(params => {
      const profileId = params.userId;
      this.http.get(environment.applicationURI + '/api/getEvents/' + profileId).subscribe((res: Array<any>) => {
        if(res) this.sortEvents(res);
      });
    });
  }
  sortEvents(events: any): void {
    events.forEach((event) => {
      let eventComment = '';
      if (event.crewComments && event.crewComments[this.profile._id]) {
        eventComment = event.crewComments[this.profile._id];
      }

      Object.keys(event.crew).forEach((crewDate) => {
        if (!this.isEventAccountedFor(event, crewDate) && event.createdBy === this.profile._id) {
          let userEvent = Object.assign({}, event);
          userEvent.date = crewDate;
          userEvent.time = event.time;
          userEvent.position = 'Creator';
          userEvent.comment = eventComment;
          userEvent = this.createDynmicColumnModel(userEvent);
          // Only get past events
          if (new Date(userEvent.date).getTime() < Date.now()) {
            this.pastEvents.push(userEvent);
          }
        }
        if (event.crew[crewDate] && typeof event.crew[crewDate].forEach === 'function') {
          event.crew[crewDate].forEach((crew) => {
            if (!this.isEventAccountedFor(event, crewDate)) {
              if (crew._id === this.profile._id || event.createdBy === this.profile._id) {
                const userEvent = Object.assign({}, event);
                userEvent.date = crewDate;
                userEvent.time = crew.callTime;
                userEvent.isAvailable = crew.isAvailable;
                userEvent.comment = eventComment;
                const eventDate = new Date(crewDate);
                eventDate.setHours(0, 0, 0, 0);
                if (crew.callTime) {
                    const timePieces = crew.callTime.split(':');
                    let hours = parseInt(timePieces[0], 10);
                    if (timePieces[1].includes('PM')) {
                        hours += 12;
                    } else if (hours === 12) {
                        hours = 0;
                    }
                    const minutes = parseInt(timePieces[1].substring(0, 2), 10);
                    eventDate.setHours(hours, minutes, 0, 0);
                }
                const eventDateTime = eventDate.getTime();
                userEvent.position = this.positionConfigurationMap[crew.position];
                // Only get past events
                if (new Date(eventDateTime).getTime() < Date.now()) {
                  this.pastEvents.push(userEvent);
                }
              }
            }
          });
        }
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
      case 'rating':
        value = event.time;
        break;
      case 'comment':
        value = event.comment;
        break;
      default:
        break;
    }
    return value;
  }
  isEventAccountedFor(event, newDate): Boolean {
    const exists = this.pastEvents.findIndex(x => (x._id === event._id && x.date === newDate)) >= 0;
    if (exists) {
      return true;
    } else {
      return false;
    }
  }
}
