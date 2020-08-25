import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { OrganizationService } from './organization.service';
import { UserService } from './user.service';
import { environment } from '@env';
import { MongoService } from 'wacom';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageComponent } from '../modals/message/message.component';
import { EventService } from './event.service';

@Injectable({
	providedIn: 'root'
})
export class JobService {
	private url = environment.applicationURI + '/api/job';
	public all_jobs:any = [];
	public myjobs:any = [];
	public jobs:any = [];
	public _jobs:any = {};
	public assigned:any = {};
	public assigned_by_day:any = {};
	public done:any = false;
	public now = new Date().getTime();
	public byEvent:any = {};
	refresh(){
		this.now = new Date().getTime();
	}
	on(cb=()=>{}){
		if(this.done) return cb();
		setTimeout(()=>{
			this.on(cb);
		}, 100);
	}
	init(){
		if(!this.os.org){
			return setTimeout(this.init.bind(this), 100);
		}
		for(let i = 0; i < this.all_jobs.length; i++){
			if(!this.all_jobs[i].apply) this.all_jobs[i].apply = {};
			this._jobs[this.all_jobs[i]._id] = this.all_jobs[i];
			if(this.all_jobs[i].org==this.os.org._id){
                // console.log("job pushed", this.all_jobs[i]);
                
				this.jobs.push(this.all_jobs[i]);
			}
		}
		this.done = true;
	}
	constructor(private http: HttpClient,
		private es: EventService,
		private modalService: NgbModal,
		private mongo: MongoService,
		private us: UserService,
		private os: OrganizationService,
		private storage: LocalStorageService) {
		this.mongo.get('job', {
			replace: {
				origin: function(val, cb, doc){
					cb(doc.assigned);
				},
				apply: this.mongo.beObj,
				times: function(val, cb){
					if(!val.from.time){
						val.from.time = (val.from.hour % 12 < 10 && '0' || '') + (val.from.hour % 12) + ':';
						if(val.from.time == '00:') val.from.time = '12:';
						val.from.time += (val.from.minute < 10 && '0' || '') + val.from.minute;
						val.from.time += val.from.hour >= 12 && ' pm' || ' am';
					}
					if(!val.to){
						val.to = val.from;
					}
					if(!val.to.time){
						val.to.time = (val.to.hour % 12 < 10 && '0' || '') + (val.to.hour % 12) + ':';
						if(val.to.time == '00:') val.to.time = '12:';
						val.to.time += (val.to.minute < 10 && '0' || '') + val.to.minute;
						val.to.time += val.to.hour >= 12 && ' pm' || ' am';
					}
					cb(val);
				}
			},
			query: {
				myjobs: (doc)=>{
                    console.log("jobs are >>> ",doc);
					//if(this.us.user._id == doc.assigned) return true;
					return !doc.accepted && (!doc.assigned||!doc.force);
				}
			},
			groups: {
				assigned_by_day: {
					field: function(doc, cb){
						cb(doc.day+doc.assigned);
						cb(doc.day+doc.assigned+doc.event);
						return doc.day+doc.assigned+doc._id;
					},
					allow: function(doc){
						return doc.day && doc.assigned;
					}
				},
				assigned: {
					field: function(doc){
						return doc.assigned;
					},
					allow: function(doc){
						return doc.assigned;
					}
				},
				byEvent: {
					field: function(doc, cb){
						cb(doc.event);
						return doc.event + doc.day;
					},
					allow: function(doc){
						return !!doc.day;
					}
				}
			}
		}, (arr, obj)=>{
			this.myjobs = obj.myjobs;
			this.assigned_by_day = obj.assigned_by_day;
			this.assigned = obj.assigned;
			this.byEvent = obj.byEvent;
			this.all_jobs = arr;
			this.init();
		});
		this.http.get(this.url + '/get').subscribe((data) => {
			this.all_jobs = data;
			this.init();
		});
	}
	attach_date(job){
		if(!job.event && this.es._events[job.event]) return;
		job.__event_dates = this.es._events[job.event].dates_view;
	}
	create(job, cb:any=()=>{}){
		this.mongo.create('job', job, cb);
	}
	save(job, cb:any=()=>{}){
		this.attach_date(job);
		if(job.origin && job.assigned != job.origin){
			const modalRef = this.modalService.open(MessageComponent, {size: 'lg'});
			if(job.assigned){
				modalRef.componentInstance.title = "Tell why you are changing assigned.";
			}else{
				modalRef.componentInstance.title = "Tell why you are removing assigned.";
			}
			modalRef.componentInstance.placeholder = "Type the reason.";
			modalRef.componentInstance.save.subscribe((saved) => {
				job.message = saved;
				job.origin = job.assigned;
				this.mongo.update('job', job, cb);
			});
			modalRef.componentInstance.cancel.subscribe((saved) => {
				job.assigned = job.origin;
				this.mongo.update('job', job, cb);
			});
		}else{
			this.mongo.update('job', job, cb);
		}
	}
	update(job, cb:any=()=>{}){
		this.mongo.afterWhile(job, ()=>{
			this.save(job, cb);
		});
	}
	apply(apply){
		this.refresh();
		apply.org = this.os.org._id;
		this.http.post(this.url + '/apply', apply).subscribe((data) => {
			if(apply.apply){
				this.storage.store('alert', {
					type: 'success',
					message: 'You have applied to the job'
				});
			}else{
				this.storage.store('alert', {
					type: 'error',
					message: 'You have canceled your application for the job'
				});
			}
		});
	}
	delete(job, cb:any=()=>{}, force_message=''){
		this.attach_date(job);
		if(force_message){
			if(job.assigned) job.message = force_message;
			this.mongo.delete('job', job);
		}else if(job.assigned){
			const modalRef = this.modalService.open(MessageComponent, {size: 'lg'});
			modalRef.componentInstance.title = "Tell why you are removing this job.";
			modalRef.componentInstance.placeholder = "Message";
			modalRef.componentInstance.save.subscribe((saved) => {
				this.mongo.delete('job', {
					_id: job._id,
					message: saved
				}, {
					fields: '_id message'
				}, ()=>{
					this.storage.store('alert', {
						type: 'danger',
						message: 'Job Successfully Deleted'
					});
					cb();
				});
			});
		}else{
			this.mongo.delete('job', job, ()=>{
				this.storage.store('alert', {
					type: 'danger',
					message: 'Job Successfully Deleted'
				});
				cb();
			});
		}
	}
}
