import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { OrganizationService } from './organization.service';
import { environment } from '@env';
import { MongoService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	private url = environment.applicationURI + '/api/event';
	public all_events:any = [];
	public events:any = [];
	public done:any = false;
	public _events:any = {};
	constructor(private http: HttpClient,
		private mongo: MongoService,
		private os: OrganizationService,
		private storage: LocalStorageService) {
		this.events = this.mongo.get('event', {
			replace: {
				start: function(val, cb, doc){
					cb(new Date(doc.startDate));
				},
				end: function(val, cb, doc){
					cb(new Date(doc.endDate));
				},
				dates: function(val, cb, doc){
					let dates = [];
					let from = doc.start.getTime();
					let to = doc.end.getTime();
					const push_day = day_timed => {
						let pd = new Date(day_timed);
						dates.push( (pd.getMonth()<9&&'0'||'') + (pd.getMonth()+1) + '/' + (pd.getDate()<10&&'0'||'') + pd.getDate() + '/' + pd.getFullYear() );
					};
					push_day(from);
					while(from < to){
						from += 86400000;
						push_day(from);
					}
					cb(dates);
				},
				dates_view: function(val, cb, doc){
					let dates_view = doc.dates[0];
					if(doc.dates.length>1){
						dates_view += ' - ' + doc.dates[doc.dates.length-1];
					}
					cb(dates_view);
				},
				apply: this.mongo.beObj
			},
			groups: {
				by_event: {
					field: function(doc){
						return doc.organizationId;
					}
				}
			}
		}, (data, obj)=>{
			this._events = obj;
			this.done = true;
		});
	}
	create(event, cb=(event:any)=>{}, alert=true){
		event.organizationId = this.os.org._id;
		this.mongo.create('event', event, created=>{
			if(created){
				cb(created);
				if(alert){
					this.storage.store('alert', {
						type: 'success',
						message: 'event Successfully Created'
					});
				}
			}
		});
	}
	private _update = {};
	update(event){
		clearTimeout(this._update[event._id]);
		this._update[event._id] = setTimeout(()=>{
			this.http.post(this.url + '/update', event).subscribe((data) => {
				this.storage.store('alert', {
					type: 'success',
					message: 'event Successfully Updated'
				});
			});
		}, 1000);
	}
	delete(event){
		this.http.post(this.url + '/delete', event).subscribe((data) => {
			for(let i = 0; i < this.events.length; i++){
				if(this.events[i]._id == event._id){
					this.events.splice(i, 1);
					break;
				}
			}
			this.storage.store('alert', {
				type: 'danger',
				message: 'event Successfully Deleted'
			});
		});
	}
}
