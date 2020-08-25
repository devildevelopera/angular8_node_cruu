import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {
    UserService,
    OrganizationService,
    EventService,
    JobService,
    GroupService,
    LabelService,
    PositionConfigurationService
} from '@services';
import { ConditionalExpr } from '@angular/compiler';

@Component({
    selector: 'app-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
export class JobComponent {
    public options: any = {};
    public groups: any = [];
    public by_group: any = {};
    public job: any = { times: {}, date: {}, position: '' };
    public dates: any = [];
    public _dates: any = {};
    public assigned: any = {};
    public need_hotel: any = {};
    public hotel: any = {};
    public event_info: any = true;
    @Output() save: EventEmitter<any> = new EventEmitter();
    hasDate() {
        if (this.job.day) return true;
        for (let i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) return true;
        }
        return false;
    }
    constructor(public modal: NgbActiveModal,
        public gs: GroupService,
        public ls: LabelService,
        public es: EventService,
        public js: JobService,
        public ps: PositionConfigurationService,
        public os: OrganizationService,
        public us: UserService) {

        console.log("this.us", this.us);

        if (!this.job.position && this.ps._positions[this.os.org._id] && this.ps._positions[this.os.org._id].length) {
            this.job.position = this.ps._positions[this.os.org._id][0].value;
        }
        setTimeout(() => {
            if (!this.job.assigned) this.job.assigned = '';
        }, 250);
    }
    submit() {
        if (this.job._id) {
            this.save.emit(this.job);
            this.modal.close();
            return this.js.update(this.job, this.us.refresh.bind(this.us));
        }
        for (let i = 0; i < this.dates.length; i++) {
            if (this._dates[this.dates[i]]) {
                this.job.day = this.dates[i];
                this.job.assigned = this.assigned[this.dates[i]] || null;
                this.job.need_hotel = this.need_hotel[this.dates[i]] || null;
                this.job.hotel = this.hotel[this.dates[i]] || null;
                this.job.__event_dates = this.dates[0];
                if (this.dates.length > 1) {
                    this.job.__event_dates += ' - ' + this.dates[this.dates.length - 1];
                }
                this.js.create(this.job, this.us.refresh.bind(this.us));
            }
        }
        this.us.refresh();
        this.modal.close();
    }
    allow_alert(userId, day) {
        if (this.js.assigned_by_day[day + userId] &&
            this.js.assigned_by_day[day + userId].length > 1) return false;
        if (this.js.assigned_by_day[day + userId] &&
            this.js.assigned_by_day[day + userId].length == 1 &&
            (!this.js.assigned_by_day[day + userId + this.job._id] ||
                !this.js.assigned_by_day[day + userId + this.job._id].length)) return false;
        return true;
    }
    allow(userId, day) {
        if (this.js.assigned_by_day[day + userId + this.job.event] &&
            this.js.assigned_by_day[day + userId + this.job.event].length >= 1) return true;
        if (this.js.assigned_by_day[day + userId] &&
            this.js.assigned_by_day[day + userId].length > 2) return false;
        if (this.js.assigned_by_day[day + userId] &&
            this.js.assigned_by_day[day + userId].length == 1 &&
            (!this.js.assigned_by_day[day + userId + this.job._id] ||
                !this.js.assigned_by_day[day + userId + this.job._id].length)) return false;
        return true;
    }
    public colors: any = {};
    init() {
        if (!this.es.done) {
            return setTimeout(this.init.bind(this), 100);
        }
        if (!this.ls.done) {
            return setTimeout(this.init.bind(this), 100);
        }
        let event = this.es._events[this.job.event];
        if (!event) return;
        let groups = [];
        if (event.labels) {
            let by_label = event.labels.split(', ');
            for (let i = 0; i < by_label.length; i++) {
                let labelId = this.ls.labels_by_name[by_label[i]][0]._id;
                if (!this.gs.groups_by_label[labelId] ||
                    !this.gs.groups_by_label[labelId].length) {
                    continue;
                }
                for (let j = 0; j < this.gs.groups_by_label[labelId].length; j++) {
                    this.colors[this.gs.groups_by_label[labelId][j].name] = this.ls.labels_by_name[by_label[i]][0].color;
                    groups.push({
                        name: this.gs.groups_by_label[labelId][j].name,
                        users: this.gs.groups_by_label[labelId][j].users
                    });
                }
            }
        }
        this.groups = groups;
        let by_group = {};
        for (let i = 0; i < groups.length; i++) {
            for (let j = 0; j < groups[i].users.length; j++) {
                if (!by_group[groups[i].users[j]]) by_group[groups[i].users[j]] = [];
                if (!by_group[groups[i].users[j]].includes(groups[i].name)) {
                    by_group[groups[i].users[j]].push(groups[i].name);
                }
            }
        }
        this.by_group = by_group;
    }
    public positionChanged() {
        if (!(this.job.position && this.us.org_pos[this.os.org._id + this.job.position])) {
            this.job.assigned = null;
        }
        for (let i = 0; i < this.dates.length; i++) {
            this.assigned[this.dates[i]] = null;
            
        }
        
    }
}