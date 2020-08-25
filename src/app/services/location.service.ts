import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { OrganizationService } from './organization.service';
import { environment } from '@env';

@Injectable({
	providedIn: 'root'
})
export class LocationService {
	private url = environment.applicationURI + '/api/location';
	public locations:any = [];
	public _locations:any = {};
	public done:any = false;
	constructor(private http: HttpClient,
		private os: OrganizationService,
		private storage: LocalStorageService) {
		this.http.get(this.url + '/get').subscribe((data) => {
			this.locations = data;
			for(let i = 0; i < this.locations.length; i++){
				this._locations[this.locations[i]._id] = this.locations[i];
				this._locations[this.locations[i].venueName] = this.locations[i];
			}
			this.done = true;
		});
	}
	create(location){
		this.http.post(this.url + '/create', location).subscribe((data:any) => {
			if(!data) return;
			this.locations.push(data);
			this._locations[data._id] = data;
			this.storage.store('alert', {
				type: 'success',
				message: 'location Successfully Created'
			});
		});
	}
	private _update = {};
	update(location){
		clearTimeout(this._update[location._id]);
		this._update[location._id] = setTimeout(()=>{
			this.http.post(this.url + '/update', location).subscribe((data) => {
				this.storage.store('alert', {
					type: 'success',
					message: 'location Successfully Updated'
				});
			});
		}, 1000);
	}
	delete(location){
		this.http.post(this.url + '/delete', location).subscribe((data) => {
			for(let i = 0; i < this.locations.length; i++){
				delete this._locations[location._id];
				if(this.locations[i]._id == location._id){
					this.locations.splice(i, 1);
					break;
				}
			}
			this.storage.store('alert', {
				type: 'danger',
				message: 'location Successfully Deleted'
			});
		});
	}
}
