import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import * as Moment from 'moment';
import * as MomentRange from 'moment-range';
import { NgbDateParserFormatter, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Broadcaster } from '../../utils/broadcaster';
import { environment } from '@env';
import { PositionApprovalComponent } from './position-approval/position-approval.component';
import {
    PositionConfigurationService,
    LabelService,
    CategoryService,
    RateService,
    JobService,
    OrganizationService,
    EventService,
    GroupService,
    UserService
} from '@services';
import { ngxCsv } from 'ngx-csv/ngx-csv';
import { JobComponent, CrewmailComponent, LabelcComponent } from '@modals';
import { MongoService } from 'wacom';
declare var pdfMake: any;

@Component({
    selector: 'app-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    public event: any;
    public eventDetailsForm: FormGroup;
    public eventDates = [];
    public dateCrew = {};
    public dateInventory = {};
    public editMode = false;
    public startDate = null;
    public endDate = null;
    public isClone = null;
    public isNew = null;
    public dateKeys = [];
    public time = {
        hour: null,
        minute: null,
        meridian: null
    };
    public user: any;
    public organization: any;
    public organizationLocations: any[];
    public locationDropdownOptions: any[];
    public selectedLocation: any = null;
    public eventNeedsApprovals = false;
    public positionConfigurationMap = {};
    constructor(private route: ActivatedRoute,
        public mongo: MongoService,
        public es: EventService,
        public os: OrganizationService,
        public gs: GroupService,
        public ls: LabelService,
        public js: JobService,
        public us: UserService,
        public rs: RateService,
        public cs: CategoryService,
        public http: HttpClient,
        public formBuilder: FormBuilder,
        public storage: LocalStorageService,
        public router: Router,
        public parserFormatter: NgbDateParserFormatter,
        public broadcaster: Broadcaster,
        private modalService: NgbModal,
        private pcs: PositionConfigurationService) { }
    sendEmail() {
        const modalRef = this.modalService.open(CrewmailComponent, { size: 'lg' });
        modalRef.componentInstance._id = this.event._id;
        if (this.eventDates.length) {
            modalRef.componentInstance.dates = this.eventDates;
        }
        modalRef.componentInstance.email.title = this.event.title;
        modalRef.componentInstance.init();
    }
    createCrew() {
        const modalRef = this.modalService.open(JobComponent, { size: 'lg' });
        if (this.eventDates.length) {
            modalRef.componentInstance.dates = this.eventDates;
            for (let i = 0; i < this.eventDates.length; i++) {
                modalRef.componentInstance._dates[this.eventDates[i]] = true;
            }
            modalRef.componentInstance.job.times.from = this.event.times[this.eventDates[0]];
            modalRef.componentInstance.job.times.to = this.event.times['to' + this.eventDates[0]];
        }
        modalRef.componentInstance.job.event = this.event._id;
        modalRef.componentInstance.job.org = this.event.organizationId;
        modalRef.componentInstance.init();

    }
    initialize() {
        const range = MomentRange.extendMoment(Moment).range(Moment(this.event.startDate), Moment(this.event.endDate));
        const newDates = Array.from(range.by('days'));
        this.dateKeys = [];
        newDates.forEach((date) => {
            let newDate = Moment(date).format('MM/DD/YYYY').toString();
            this.dateKeys.push(newDate);
        });
        this.eventDates = this.dateKeys;
        if (this.event && !this.event.budget) this.event.budget = {};
        if (this.eventDates && this.eventDates.length) {
            if (!this.event.times) this.event.times = {};
            for (let i = 0; i < this.eventDates.length; i++) {
                if (!this.event.times[this.eventDates[i]]) {
                    this.event.times[this.eventDates[i]] = {
                        time: "05:00 pm",
                        kind: "pm",
                        minute: 0,
                        second: 0,
                        hour: 17
                    }
                }
            }
        }
    }
    notDates() {
        if (!this.event && !this.event.times) return true;
        if (!this.eventDates) return false;
        for (let i = 0; i < this.eventDates.length; i++) {
            if (!this.event.times[this.eventDates[i]]) {
                return true;
            }
            if (!this.event.times['duration' + this.eventDates[i]]) {
                return true;
            }
        }
        return false;
    }
    ngOnInit() {
        this.eventDetailsForm = this.formBuilder.group({
            title: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            time: new FormControl(''),
            selectedLocation: new FormControl('', [Validators.required])
        });
        this.route.queryParams.subscribe(params => {
            const eventId = params.eventId;
            this.isClone = params.isClone;
            this.isNew = params.isNew;
            if (params.editMode) {
                this.editMode = params.editMode;
            }

            if (!this.isNew) {
                this.mongo.on('event', () => {
                    this.event = this.es._events[eventId];
                    this.initialize();
                    this.storage.store('event', this.event);
                    if (this.event.crew) {
                        Object.keys(this.event.crew).forEach(date => {
                            this.event.crew[date].forEach(position => {
                                if (position.newApplicants && position.newApplicants.length > 0) {
                                    this.eventNeedsApprovals = true;
                                }
                            })
                        });
                    }
                    this.selectedLocation = this.event.location;
                    this.checkEventDates();
                    this.buildForm();
                    this.startDate = this.event.startDate;
                    this.endDate = this.event.endDate;
                    this.parseTime();
                    if (this.isClone) {
                        this.onSubmit();
                    }
                });
            } else {
                this.lock_calc = false;
                this.event = this.newEvent();
                this.initialize();
                this.storage.store('event', this.event);
                if (!this.event.times) this.event.times = {};
                this.selectedLocation = null;
                this.checkEventDates();
                this.buildForm();
                this.startDate = this.event.startDate;
                this.endDate = this.event.endDate;
                this.parseTime();
            }

        });
        const organizationId = this.us.user.organizations[0]._id;

        this.pcs.getPositions(organizationId).subscribe(data => {
            if (data) {
                Object.keys(data).forEach(key => {
                    this.positionConfigurationMap[key] = data[key].label;
                });
            }
        });


        this.http.get(environment.applicationURI + '/api/getOrganization/' + organizationId).subscribe((data) => {
            this.organization = data;
            this.updateLocationsDropdown();
        });

        this.broadcaster.listen('updateCrewObject').subscribe((res) => {
            this.dateCrew = res.data.crew;
            if (this.event.auditChanges) {
                this.event.auditChanges.push(res.data.auditChange);
            }
        });

        this.broadcaster.listen('updateInventoryObject').subscribe((res) => {
            this.dateInventory = res.data;
        });
    }
    public now = new Date().getTime();
    refresh() {
        this.now = new Date().getTime();
    }
    openDialog() {
        const modalRef = this.modalService.open(PositionApprovalComponent, { size: 'lg' });
        modalRef.componentInstance.initialize(this.event);
    }
    private _locations = {};
    updateLocationsDropdown() {
        if (this.organization.locations) {
            this.locationDropdownOptions = [];
            this.organizationLocations = this.organization.locations;
            this.organizationLocations.forEach(location => {
                this._locations[location._id] = location;
                if (location) {
                    const dropdownLocation = Object.assign({}, {
                        value: location._id,
                        label: location.venueName
                    });
                    this.locationDropdownOptions.push(dropdownLocation);
                }
            });
        }
    }
    selectLocation() {
        if (this.eventDetailsForm.controls.selectedLocation.value && this.alert == 'venue') {
            this.alert = '';
        }
        const locationId = this.eventDetailsForm.controls.selectedLocation.value;
        if (locationId && locationId !== '') {
            this.event.location = locationId;
            this.selectedLocation = this.findLocationById(locationId);
        }
    }
    findLocationById(locationId) {
        return this.organizationLocations.find(function (orgLocation) {
            return orgLocation._id === locationId;
        });
    }
    newEvent(): Object {
        this.editMode = true;
        let today: any = new Date(Date.now());
        today = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        let newEvent = {
            title: '',
            description: '',
            labels: '',
            startDate: today,
            endDate: today,
            time: '12:00pm',
            crew: {
                [today]: []
            },
            inventory: {
                [today]: []
            },
            createdBy: this.us.user._id,
            organizationId: this.us.user.organizations[0]._id,
            location: null
        };
        this.http.get(environment.applicationURI + '/api/event/_id').subscribe(_id => {
            this.event.__new = true;
            this.event._id = _id;
            this.mongo.push('event', this.event);
        });
        return newEvent;
    }
    parseTime(): void {
        if (this.event.time) {
            const times = this.event.time.split(':', 2);
            this.time.hour = parseInt(times[0]);
            this.time.minute = times[1];
            this.time.minute = parseInt(this.time.minute.substring(0, this.time.minute.length - 2));
        }
    }
    formatTimeForSave(): object {
        if (this.time) {
            let meridian = 'am';
            let hour = this.time.hour;
            if (this.time.hour >= 12) {
                meridian = 'pm';
                if (hour != 12) {
                    hour = this.time.hour - 12;
                }
            }
            if (this.time.minute.toString().length < 2) {
                this.time.minute = '0' + this.time.minute;
            }
            return {
                meridian: meridian,
                hour: hour,
                minute: this.time.minute
            }
        }
    }
    buildForm() {
        if (!this.ls.done) {
            return setTimeout(this.buildForm.bind(this), 100);
        }
        if (this.isClone) {
            delete this.event._id;
            this.event.title = this.event.title.concat(' Clone');
        }
        this.eventDetailsForm.controls.title.setValue(this.event.title);
        this.eventDetailsForm.controls.description.setValue(this.event.description);
        if (this.event.location) {
            this.eventDetailsForm.controls.selectedLocation.setValue(this.event.location._id);
        }
        this.eventDetailsForm.controls.time.setValue(this.event.time);
        let labels = this.event.labels.split(', ');
        for (let i = 0; i < this.ls.labels.length; i++) {
            this.ls.labels[i]._active = false;
            for (let j = 0; j < labels.length; j++) {
                if (labels[j] == this.ls.labels[i].name) {
                    this.ls.labels[i]._active = true;
                    break;
                }
            }
        }
        this.refresh();
    }
    backup_eventDates: any;
    checkEventDates(): void {
        const range = MomentRange.extendMoment(Moment).range(this.event.startDate, this.event.endDate);
        const newDates = Array.from(range.by('days'));
        this.dateKeys = [];
        newDates.forEach((date) => {
            let newDate = Moment(date).format('MM/DD/YYYY').toString();
            this.dateKeys.push(newDate);
        });
        this.eventDates = this.dateKeys;
		/*
		if (this.event.crew) {
			let dates = Object.keys(this.event.crew);
			this.eventDates = dates;
			this.initialize();
			this.backup_eventDates = dates;
			dates.forEach((date) => {
				this.dateCrew[date] = [];
				this.event.crew[date].forEach((crewMember) => {
					this.dateCrew[date].push(crewMember);
				});
			});
		}

		if (this.event.inventory) {
			const dates = Object.keys(this.event.inventory);
			dates.forEach((date) => {
				this.dateInventory[date] = [];
				this.event.inventory[date].forEach((inventoryItem) => {
					this.dateInventory[date].push(inventoryItem);
				});
			});
		}
		*/
    }
    toggleEdit(): void {
        if (this.event._id) {
            this.editMode = !this.editMode;
            this.eventDates = this.backup_eventDates;
            this.initialize();
            setTimeout(() => {
                this.lock_calc = false;
            }, 1000);
        } else {
            this.router.navigate(['dashboard']);
        }
    }
    print(): void {
        const document = {
            title: this.event.title,
            dateCrew: this.dateCrew
        };
        this.storage.store('print-document', document);
        this.router.navigate(['print']);
    }
    hasChanged(oldValue, newValue): Boolean {
        return !(oldValue === newValue);
    }
    auditChange(objectToSave, newValue, oldValue, field): void {
        const audit = {
            user: {
                name: this.us.user.firstName + ' ' + this.us.user.lastName,
                _id: this.us.user._id
            },
            oldValue: oldValue,
            newValue: newValue,
            field: field,
            time: Date.now(),
            forDate: 'all',
            section: 'Details',
            action: 'edit'
        };
        objectToSave.auditChanges.push(audit);
        return objectToSave;
    }
    auditChanges(objectToSave): void {
        if (this.hasChanged(objectToSave.title, this.event.title)) {
            this.auditChange(objectToSave, objectToSave.title, this.event.title, 'title');
        }
        if (this.hasChanged(objectToSave.description, this.event.description)) {
            this.auditChange(objectToSave, objectToSave.description, this.event.description, 'description');
        }
        if (this.hasChanged(objectToSave.startDate, this.event.startDate)) {
            this.auditChange(objectToSave, objectToSave.startDate, this.event.startDate, 'startDate');
        }
        if (this.hasChanged(objectToSave.endDate, this.event.endDate)) {
            this.auditChange(objectToSave, objectToSave.endDate, this.event.endDate, 'endDate');
        }
        const eventLocation = this.event.location;
        if (this.hasChanged(objectToSave.location, eventLocation._id)) {
            const oldLocation = this.findLocationById(eventLocation._id);
            const newLocation = this.findLocationById(objectToSave.location);
            this.auditChange(objectToSave, newLocation.venueName, oldLocation.venueName, 'venue');
        }

        return objectToSave;
    }
    setupSaveObject(): void {
        const objectToSave = { ...this.event };
        objectToSave.title = this.eventDetailsForm.controls.title.value;
        objectToSave.description = this.eventDetailsForm.controls.description.value;
        objectToSave.startDate = this.startDate;
        objectToSave.endDate = this.endDate;
        objectToSave.budget = this.event.budget;
        const locationId = this.eventDetailsForm.controls.selectedLocation.value;
        if (locationId && locationId !== '') {
            objectToSave.location = locationId;
        }
        objectToSave.crew = this.dateCrew;
        objectToSave.inventory = this.dateInventory;
        return objectToSave;
    }
    private lock_calc: any = true;
    calc(date) {
        if (this.lock_calc) return;
        if (!this.notDates() && this.alert == 'times') {
            this.alert = '';
        }
        if (this.event.times[date] && this.event.times['duration' + date]) {
            this.lock_calc = true;
            setTimeout(() => {
                this.lock_calc = false;
            }, 1000);
            this.event.times['to' + date] = {
                second: (this.event.times[date].second + this.event.times['duration' + date].second) % 60,
                minute: (this.event.times[date].minute + this.event.times['duration' + date].minute) % 60,
                hour: (this.event.times[date].hour + this.event.times['duration' + date].hour) % 24
            }
        }
    }
    calc_duration(date) {
        if (this.lock_calc) return;
        if (!this.notDates() && this.alert == 'times') {
            this.alert = '';
        }
        if (this.event.times[date] && this.event.times['to' + date]) {
            let second = this.event.times['to' + date].second - this.event.times[date].second;
            let minute = this.event.times['to' + date].minute - this.event.times[date].minute;
            let hour = this.event.times['to' + date].hour - this.event.times[date].hour;
            if (second < 0) {
                second = 60 - second;
                minute--;
            }
            if (minute < 0) {
                minute = 60 - minute;
                hour--;
            }
            if (hour < 0) {
                return this.event.times['duration' + date] = {
                    second: 0,
                    minute: 0,
                    hour: 0
                }
            }
            this.lock_calc = true;
            setTimeout(() => {
                this.lock_calc = false;
            }, 1000);
            this.event.times['duration' + date] = { second, minute, hour };
        }
    }
    public alert: any;
    private reload:boolean= true;
    onSubmit() {
        this.alert = null;
        if (!this.eventDetailsForm.controls.title.value) {
            document.getElementById('TitleSection').scrollIntoView({
                behavior: 'smooth'
            });
            return this.alert = 'title';
        }
        if (!this.eventDetailsForm.controls.selectedLocation.value) {
            document.getElementById('VenueSection').scrollIntoView({
                behavior: 'smooth'
            });
            return this.alert = 'venue';
        }
        if (this.notDates()) {
            document.getElementById('TimeSection').scrollIntoView({
                behavior: 'smooth'
            });
            return this.alert = 'times';
        }
        this.backup_eventDates = this.eventDates;
        let newSave = false;
        if (this.isClone || this.isNew) {
            newSave = true;
        }
        const path = newSave ? 'saveEvent' : 'updateEvent';
        let objectToSave: any = this.setupSaveObject();
        if (!objectToSave.title) return this.alert = 'title';
        objectToSave.labels = '';
        for (let i = 0; i < this.ls.labels.length; i++) {
            if (this.ls.labels[i]._active) {
                if (objectToSave.labels) {
                    objectToSave.labels += ', ' + this.ls.labels[i].name;
                } else {
                    objectToSave.labels = this.ls.labels[i].name;
                }
            }
        }
        if (!newSave) {
            objectToSave = this.auditChanges(objectToSave);
        }
        let saveTime: any = this.formatTimeForSave();
        saveTime = saveTime.hour + ':' + saveTime.minute + saveTime.meridian;
        objectToSave.time = saveTime;
        if (this.backup_eventDates && this.js.byEvent[this.event._id] && this.js.byEvent[this.event._id].length) {
            for (let i = 0; i < this.js.byEvent[this.event._id].length; i++) {
                let startDate = new Date(objectToSave.startDate).getTime() - 86400000;
                let endDate = new Date(objectToSave.endDate).getTime() + 86400000;
                let day = new Date(this.js.byEvent[this.event._id][i].day).getTime();
                if (day < startDate || day > endDate) {
                    this.js.delete(this.js.byEvent[this.event._id][i], () => { }, 'Date removed');
                }
            }
        }
        this.http.post(environment.applicationURI + '/api/' + path, objectToSave).subscribe((res: any) => {
            const eventId = res.data._id;
            if (!objectToSave._id) {
                this.mongo.push('event', res.data);
            } else {
                let event = res.data;
                event.startDate = new Date(event.startDate)
                event.endDate = new Date(event.endDate)
                event.dates = [];
                let from = event.startDate.getTime();
                let to = event.endDate.getTime();
                const push_day = day_timed => {
                    let pd = new Date(day_timed);
                    event.dates.push((pd.getMonth() < 9 && '0' || '') + (pd.getMonth() + 1) + '/' + (pd.getDate() < 10 && '0' || '') + pd.getDate() + '/' + pd.getFullYear());
                };
                push_day(from);
                while (from < to) {
                    from += 86400000;
                    push_day(from);
                }
                for (let each in res.data) {
                    if (each == 'createdBy') continue;
                    this.es._events[eventId][each] = res.data[each];
                }
            }
            if(this.reload)
                {
                    this.reload= false;
                    setTimeout(() => {
                    document.getElementById('btnSubmit').click();
                    }, 0);
                }
            window.scrollTo(0, 0);
            this.storage.store('alert', {
                type: 'success',
                message: 'Successfully updated event!'
            });
            if (newSave) {
                this.editMode = false;
                if (this.isClone) {
                    this.editMode = true;
                }
                this.router.navigate(['event-details'], { queryParams: { eventId: eventId, editMode: this.editMode } });
            } else {
                this.http.get(environment.applicationURI + '/api/getEventByID/' + eventId).subscribe((updatedEvent: any) => {
                    if (!updatedEvent.files) updatedEvent.files = [];
                    if (!updatedEvent.times) updatedEvent.times = {};
                    this.event = updatedEvent;
                    this.initialize();
                    this.storage.store('event', this.event);
                    this.checkEventDates();
                    this.buildForm();
                    this.startDate = this.event.startDate;
                    this.endDate = this.event.endDate;
                });
                this.editMode = !this.editMode;
            }

            // create a list of users linked to this event
            // the person who created will always be attached
            const listOfUsers = [];
            if (res.data.createdBy._id) {
                listOfUsers.push(res.data.createdBy._id);
            } else {
                listOfUsers.push(res.data.createdBy);
            }

            const userUpdateBody = {
                listOfUsers: [...listOfUsers],
                dates: {}
            };
        });
    }
    formatDate(date): string {
        date = new Date(date);
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
    public today: any = this.formatDate(new Date());
    formatTime(date): string {
        date = new Date(date);
        const time = date.toLocaleTimeString('en-US');
        return time;
    }
    selectDates(dates): void {
        this.startDate = Moment(this.parserFormatter.format(dates.from));
        this.endDate = Moment(this.parserFormatter.format(dates.to));
        this.event.startDate = Moment(this.startDate).format('MM/DD/YYYY').toString();
        this.event.endDate = Moment(this.endDate).format('MM/DD/YYYY').toString();
        const range = MomentRange.extendMoment(Moment).range(this.startDate, this.endDate);
        const newDates = Array.from(range.by('days'));
        this.dateKeys = [];
        newDates.forEach((date) => {
            let newDate = Moment(date).format('MM/DD/YYYY').toString();
            this.dateKeys.push(newDate);
        });
        this.eventDates = this.dateKeys;
        // this.initialize();
        this.buildDateCrews();
        this.buildDateInventory();
        if (this.eventDates && this.eventDates.length) {
            if (!this.event.times) this.event.times = {};
            for (let i = 0; i < this.eventDates.length; i++) {
                if (!this.event.times[this.eventDates[i]]) {
                    this.event.times[this.eventDates[i]] = {
                        time: "05:00 pm",
                        kind: "pm",
                        minute: 0,
                        second: 0,
                        hour: 17
                    }
                }
            }
        }
    }
    buildDateCrews(): void {
        let newCrew = {};
        this.dateKeys.forEach((key) => {
            if (this.dateCrew[key] && !newCrew[key]) {
                newCrew[key] = this.dateCrew[key];
            }
            if (!newCrew[key]) {
                newCrew[key] = [];
            }
        });
        this.dateCrew = newCrew;
        this.broadcaster.emit('updateCrewDateTabs', this.dateCrew);
    }
    buildDateInventory(): void {
        const newInventory = {};
        this.dateKeys.forEach((key) => {
            if (this.dateInventory[key] && !newInventory[key]) {
                newInventory[key] = this.dateInventory[key];
            }
            if (!newInventory[key]) {
                newInventory[key] = [];
            }
        });

        this.broadcaster.emit('updateInventoryDateTabs', this.dateInventory);
    }
    private lock_cloneEvent = false;
    cloneEvent(): void {
        if (this.lock_cloneEvent) return;
        this.lock_cloneEvent = true;
        if (!this.js.byEvent[this.event._id]) {
            this.js.byEvent[this.event._id] = [];
        }
        let event = JSON.parse(JSON.stringify(this.event));
        event.title += ' Clone';
        this.es.create(event, created => {
            let counter = this.js.byEvent[event._id].length;
            if (!counter) {
                this.lock_cloneEvent = false;
                return this.router.navigate(['event-details'], {
                    queryParams: {
                        eventId: created._id
                    }
                });
            }
            for (let i = 0; i < this.js.byEvent[event._id].length; i++) {
                let new_job = JSON.parse(JSON.stringify(this.js.byEvent[event._id][i]));
                delete new_job.assigned;
                new_job.event = created._id;
                new_job.accepted = false;
                new_job.declined = false;
                new_job.__ignore_email = true;
                this.js.create(new_job, created_job => {
                    if (--counter == 0) {
                        this.lock_cloneEvent = false;
                        this.router.navigate(['event-details'], {
                            queryParams: {
                                eventId: created._id,
                                editMode: true
                            }
                        });
                        this.storage.store('alert', {
                            type: 'success',
                            message: 'Your event has been cloned, you can edit it.'
                        });
                    }
                });
            }
        }, false);
		/*
		this.router.navigate(['event-details'], {
			queryParams: {
				eventId: this.event._id,
				isClone: true
			}
		});
		*/
    }
	/*
	* Import / Export Management
	*/
    private times(prefix = '') {
        let times = '';
        for (let i = 0; i < this.eventDates.length; i++) {
            if (times) times += ';'
            let time = this.event.times[prefix + this.eventDates[i]];
            if (time && time.time) {
                times += time.time.replace(' ', '');
            } else if (time) {
                times += time.hour < 10 && '0' || '';
                times += time.hour % 12 + ':';
                times += time.minute < 10 && '0' || '';
                times += time.minute;
                times += time.hour >= 12 && 'pm' || 'am';
            }
        }
        return times;
    }
    private crew() {
        let crew = '';
        for (let i = 0; i < this.eventDates.length; i++) {
            if (crew) crew += ';'
            if (this.dateCrew[this.eventDates[i]]) {
                let crews = this.dateCrew[this.eventDates[i]];
                for (let j = 0; j < crews.length; j++) {
                    crew += crews[j].position + '|' + crews[j].rate
                    if (crews[j].callTime) {
                        crew += '|' + crews[j].callTime.replace(' ', '');
                    }
                }
            }
        }
        return crew;
    }
    export() {
        let labels = '';
        for (let i = 0; i < this.ls.labels.length; i++) {
            if (labels) labels += ';'
            if (this.ls.labels[i]._active) {
                labels += this.ls.labels[i].name;
            }
        }
        let location_id = this.eventDetailsForm.controls.selectedLocation.value;
        let data = [{
            title: 'Title',
            description: 'Description',
            startDate: 'Start Date',
            endDate: 'End Date',
            timesFrom: 'Times From',
            timesTo: 'Times To',
            venue: 'Venue',
            labels: 'Labels',
            crew: 'Crew',
        }, {
            title: this.eventDetailsForm.controls.title.value,
            description: this.eventDetailsForm.controls.description.value,
            startDate: this.startDate,
            endDate: this.endDate,
            timesFrom: this.times(),
            timesTo: this.times('to'),
            venue: location_id && this._locations[location_id].venueName || '',
            labels: labels,
            crew: this.crew(),
        }];
        new ngxCsv(data, 'Event');
    }
	/*
	* 48h Management
	*/
    send_48h() {
        this.http.post(environment.applicationURI + '/api/event/48h', this.event).subscribe((data) => {

        });
    }
	/*
	* PDF Management
	*/
    generatePdf() {
        if (this.os.org && this.os.org.logo) {
            this.createPdf(this.os.org.logo);
        } else {
            (async function () {
                let blob = await fetch(window.location.origin + "/api/file/public/org.png").then(r => r.blob());
                let logo = await new Promise(resolve => {
                    let reader = new FileReader();
                    reader.onload = () => resolve(reader.result);
                    reader.readAsDataURL(blob);
                });
                this.createPdf(logo);
            })();
        }
    }
    arr_to_test(arr, field = 'name') {
        let text = '';
        for (let i = 0; i < arr.length; i++) {
            if (text) text += ', ' + arr[i][field];
            else text += arr[i][field];
        }
        return text;
    }
    createPdf(logo) {
        // pageBreak: 'after'
        let content: any = [];
        for (let i = 0; i < this.eventDates.length; i++) {
            let right_side = [{
                text: 'Event Date: ' + this.eventDates[i]
            }];
            debugger
            for (let l = 0; l < this.cs.categories.length; l++) {
                let labelsNames = "";
                for (let k = 0; k < this.ls.labels.length; k++) {
                    if (this.ls.labels[k].category == this.cs.categories[l].name) {
                        let labels = this.event.labels.split(', ');
                        for (let j = 0; j < labels.length; j++) {
                            if (labels[j] == this.ls.labels[k].name) {
                                //label name
                                if (labelsNames == "")
                                    labelsNames += labels[j];
                                else
                                    labelsNames += ", " + labels[j];
                                break;
                            }
                        }
                    }
                }
                if (labelsNames != "") {
                    right_side.push({
                        text: this.cs.categories[l].name + ': ' + labelsNames
                    });
                }
            }
            // for (let j = 0; j < this.cs.categories.length; j++) {
            //     let labels = [];
            //     for (let k = 0; k < this.ls.labels.length; k++) {
            //         if (this.ls.labels[k].category == this.cs.categories[j].name) {
            //             labels.push(this.ls.labels[k]);
            //         }
            //     }
            //     if (labels.length) {
            //         right_side.push({
            //             text: this.cs.categories[j].name + ': ' + this.arr_to_test(labels)
            //         });
            //     }
            // }


            if (!this.js.byEvent[this.event._id + this.eventDates[i]]) {
                this.js.byEvent[this.event._id + this.eventDates[i]] = [];
            }
            let header: any = {
                alignment: 'justify',
                columns: [
                    [{
                        image: logo
                    }, {
                        text: this.os.org.name
                    }],
                    right_side
                ]
            }
            if (this.js.byEvent[this.event._id + this.eventDates[i]].length) {
                content.push(header);
            } else if (i + 1 == this.eventDates.length) {
                content.push(header);
                continue;
            } else {
                header.pageBreak = 'after';
                content.push(header);
                continue;
            }
            if (this.eventDates.length) {
                content.push({ text: 'Crew', style: 'header' });
            }
            let crewMembers = [['Position', 'Name', 'Call Time', 'In Time', 'Out Time', "Missed Meal (Y/N):", "Mileage (Y/N)", "Parking (Y/N)", "Initials", "Signature/Comments"]];
            for (let j = 0; j < this.js.byEvent[this.event._id + this.eventDates[i]].length; j++) {
                let job = this.js.byEvent[this.event._id + this.eventDates[i]][j];
                let crew = [];
                crew.push(job.position);
                if (job.assigned && this.us._users[job.assigned]) {
                    crew.push(this.us._users[job.assigned].firstName + ' ' + this.us._users[job.assigned].lastName);
                } else {
                    crew.push('Not Assigned');
                }
                crew.push(job.times.from.time || 'N/A');
                crew.push('');
                crew.push('');
                crew.push('');
                crew.push('');
                crew.push('');
                crew.push('');
                crew.push('');
                crewMembers.push(crew);
            }
            if (i + 1 == this.eventDates.length) {
                content.push({
                    style: 'tableExample',
                    table: {
                        body: crewMembers
                    }
                });
            } else {
                content.push({
                    style: 'tableExample',
                    table: {
                        body: crewMembers
                    },
                    pageBreak: 'after'
                });
            }
        }
        pdfMake.createPdf({
            content: content,
            pageOrientation: 'landscape',
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            defaultStyle: {
                // alignment: 'justify'
            }
        }).open();
    }
    /*
    * Labels Management
    */
    addLabel(category) {
        const modalRef = this.modalService.open(LabelcComponent, { size: 'lg' });
        modalRef.componentInstance.category = category;
        modalRef.componentInstance.refresh = this.refresh.bind(this);
    }
    /*
    * Files Management
    */
    add(file) {
        if (file.type != 'application/pdf' || file.size > 15728640) return;
        let reader = new FileReader();
        reader.onload = (e: any) => {
            this.http.post(environment.applicationURI + '/api/file/create', {
                data: String.fromCharCode.apply(null, new Uint8Array(e.target.result)),
                name: file.name.split(' ').join('')
            }).subscribe((data) => {
                if (data) {
                    this.event.files.push(environment.applicationURI + data);
                }
            });
        }
        reader.readAsArrayBuffer(file);
    }
    delete(files) {
        files = files.split('/');
        files.pop();
        this.http.post(environment.applicationURI + '/api/file/delete', {
            _id: files.pop()
        }).subscribe((data) => { });
    }
    public files: any;
    upload(files) {
        for (let i = 0; i < files.length; i++) {
            this.add(files[i]);
        }
        this.files = null;
    }
	/*
	* End of
	*/
}
