import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { OrganizationService } from './organization.service';
import { environment } from '@env';
import { MongoService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class LabelService {
	private url = environment.applicationURI + '/api/label';
	public all_labels:any = [];
	public labels:any = [];
	public labels_by_name:any = {};
	public done:any = false;
	constructor(private http: HttpClient,
		private os: OrganizationService,
		private mongo: MongoService,
		private storage: LocalStorageService) {
		this.labels = this.mongo.get('label', {
			groups: {
				name: {
					field: function(doc){
						return doc.name;
					}
				}
			}
		}, (data, obj)=>{
			this.labels_by_name = obj.name;
			this.all_labels = data;
			this.done = true;
		});
	}
	create(label, cb=()=>{}){
		label.org = this.os.org._id;
		this.mongo.create('label', label, ()=>{
			cb();
			this.storage.store('alert', {
				type: 'success',
				message: 'Label Successfully Created'
			});
		});
	}
	private _update = {};
	update(label){
		clearTimeout(this._update[label._id]);
		this._update[label._id] = setTimeout(()=>{
			this.http.post(this.url + '/update', label).subscribe((data) => {
				this.storage.store('alert', {
					type: 'success',
					message: 'Label Successfully Updated'
				});
			});
		}, 1000);
	}
	delete(label){
		this.http.post(this.url + '/delete', label).subscribe((data) => {
			for(let i = 0; i < this.labels.length; i++){
				if(this.labels[i]._id == label._id){
					this.labels.splice(i, 1);
					break;
				}
			}
			this.storage.store('alert', {
				type: 'danger',
				message: 'Label Successfully Deleted'
			});
		});
	}
}
