import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { OrganizationService } from './organization.service';
import { UserService } from './user.service';
import { environment } from '@env';
import { MongoService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class GroupService {
	private url = environment.applicationURI + '/api/group';
	public all_groups:any = [];
	public groups:any = [];
	public groups_by_label:any = {};
	public done:any = false;
	constructor(private http: HttpClient,
		private us: UserService,
		private mongo: MongoService,
		private os: OrganizationService,
		private storage: LocalStorageService) {
		this.mongo.get('group', {
			replace: {
				label: this.mongo.beString
			},
			groups: {
				label: {
					field: function(doc, cb){
						if(doc.labels&&doc.labels.length){
							for (let i = 0; i < doc.labels.length; i++){
							    cb(doc.labels[i]._id);
							}
						}
					}
				}
			}
		}, (data, obj)=>{
			this.groups_by_label = obj.label;
			this.all_groups = data;
			for(let i = 0; i < this.all_groups.length; i++){
				let group = this.all_groups[i];
				if(group.org==this.os.org._id){
					this.groups.push(group);
				}
				group._users = {};
				for(let j = 0; j < group.users.length; j++){
					group._users[group.users[j]] = true;
					this.selected[group._id+group.users[j]] = true;
				}
			}
			this.done = true;
		});
	}
	create(group, cb=resp=>{}){
		group.org = this.os.org._id;
		this.http.post(this.url + '/create', group).subscribe((created) => {
			if(!created) return;
			cb(created);
			this.groups.push(created);
			this.storage.store('alert', {
				type: 'success',
				message: 'Group Successfully Created'
			});
		});
	}
	private _update = {};
	update(group){
		clearTimeout(this._update[group._id]);
		this._update[group._id] = setTimeout(()=>{
			this.http.post(this.url + '/update', group).subscribe((data) => {
				this.storage.store('alert', {
					type: 'success',
					message: 'Group Successfully Updated'
				});
			});
		}, 1000);
	}
	delete(group){
		this.http.post(this.url + '/delete', group).subscribe((data) => {
			for(let i = 0; i < this.groups.length; i++){
				if(this.groups[i]._id == group._id){
					this.groups.splice(i, 1);
					break;
				}
			}
			this.storage.store('alert', {
				type: 'danger',
				message: 'Group Successfully Deleted'
			});
		});
	}
	public selected = {};
	select(group){
		for(let i = 0; i < this.us.users_current.length; i++){
			this.selected[group._id+this.us.users_current[i]._id] = this.selected[group._id];
		}
		this.set_users(group);
	}
	set_users(group){
		group.users = [];
		for(let i = 0; i < this.us.users_current.length; i++){
			if(this.selected[group._id+this.us.users_current[i]._id]){
				group.users.push(this.us.users_current[i]._id);
			}
		}
		this.update(group);
	}
}
