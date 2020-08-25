import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { OrganizationService } from './organization.service';
import { environment } from '@env';

@Injectable({
	providedIn: 'root'
})
export class CategoryService {
	private url = environment.applicationURI + '/api/category';
	public all_categories:any = [];
	public categories:any = [];
	public done:any = false;
	constructor(private http: HttpClient,
		private os: OrganizationService,
		private storage: LocalStorageService) {
		this.http.get(this.url + '/get').subscribe((data) => {
			this.all_categories = data;
			for(let i = 0; i < this.all_categories.length; i++){
				if(this.all_categories[i].org==this.os.org._id){
					this.categories.push(this.all_categories[i]);
				}
			}
			this.categories.sort(function(a, b){
				if(!a.order) return -1;
				if(!b.order) return 1;
				if(a.order<b.order) return -1;
				return 1;
			});
			this.done = true;
		});
	}
	create(category){
		category.org = this.os.org._id;
		this.http.post(this.url + '/create', category).subscribe((data) => {
			if(!data) return;
			this.categories.push(data);
			this.storage.store('alert', {
				type: 'success',
				message: 'Category Successfully Created'
			});
		});
	}
	private _update = {};
	update(category, show_alert = true){
		clearTimeout(this._update[category._id]);
		this._update[category._id] = setTimeout(()=>{
			this.http.post(this.url + '/update', category).subscribe((data) => {
				if(show_alert){
					this.storage.store('alert', {
						type: 'success',
						message: 'Category Successfully Updated'
					});
				}
			});
		}, 1000);
	}
	delete(category){
		this.http.post(this.url + '/delete', category).subscribe((data) => {
			for(let i = 0; i < this.categories.length; i++){
				if(this.categories[i]._id == category._id){
					this.categories.splice(i, 1);
					break;
				}
			}
			this.storage.store('alert', {
				type: 'danger',
				message: 'Category Successfully Deleted'
			});
		});
	}
}
