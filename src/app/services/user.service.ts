import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { environment } from '@env';
import { MongoService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	private url = environment.applicationURI + '/api/';
	public now = new Date().getTime();
	refresh(){
		this.now = new Date().getTime();
	}
	public done = false;
	public user:any = {};
	public users:any = [];
	public _users:any = {};
	public users_pending:any = [];
	public users_current:any = [];
	public org_pos = {};
	constructor(private http: HttpClient,
		public mongo: MongoService,
		public router: Router,
		private storage: LocalStorageService) {
    	this.user = this.storage.retrieve('user');
		this.http.get(this.url+'user/me').subscribe((user:any) => {
			if(!user._id){
				this.logout();
			}else{
				this.user = user;
				this.storage.store('user', user);
			}
		}, err=>{
			console.log(err);
		});

		this.mongo.get('user', {
			groups: {
				org_pos: {
					allow: function(doc){
						return doc._activated;
					},
					sort: this.mongo.sortAscString('lastName'),
					field: function(doc, cb){
						for (let i = 0; i < doc.organizations.length; i++){
						    for (let j = 0; j < doc.organizations[i]._positions.length; j++){
						        cb(doc.organizations[i]._id+doc.organizations[i]._positions[j]);
						    }
						}
					}
				}
			},
			query: {
				users_current: {
					allow: function(doc){
						return doc._activated;
					},
					sort: this.mongo.sortAscString('lastName')
				},
				users_pending: {
					allow: function(doc){
						return !doc._activated;
					},
					sort: this.mongo.sortAscString('email')
				}
			}
		}, (arr, obj)=>{
			this.users = arr;
			this._users = obj;
			this.users_current = obj.users_current;
			this.users_pending = obj.users_pending;
			this.org_pos = obj.org_pos;
			this.done = true;
		});
	}
	delete(user){
		if(user.isAdmin) return;
		this.http.post(this.url+'deleteUser', {
			id: user._id
		}).subscribe((data) => {
			for(let i = 0; i < this.users.length; i++){
				if(this.users[i]._id == user._id){
					this.users.splice(i, 1);
					break;
				}
			}
			for(let i = 0; i < this.users_current.length; i++){
				if(this.users_current[i]._id == user._id){
					this.users_current.splice(i, 1);
					break;
				}
			}
			for(let i = 0; i < this.users_pending.length; i++){
				if(this.users_pending[i]._id == user._id){
					this.users_pending.splice(i, 1);
					break;
				}
			}
		});
	}
	logout(){
		this.storage.clear('user');
		this.storage.clear('organization');
		this.storage.clear('userOrganization');
		window.location.href = "/login";
	}
	update(user){
		this.mongo.afterWhile(user, ()=>{
			for (let i = 0; i < user.organizations.length; i++){
				user.organizations[i]._positions = [];
				for (let j = 0; j < user.organizations[i].positions.length; j++){
				    user.organizations[i]._positions.push(user.organizations[i].positions[j].value);
				}
			}
			this.mongo.update('user', user);
		});
	}
	afterWhile(doc, cb, time=2000){
		if(typeof cb == 'function' && typeof time == 'number'){
			clearTimeout(doc.__updateTimeout);
			doc.__updateTimeout = setTimeout(cb, time);
		}
	};
}
