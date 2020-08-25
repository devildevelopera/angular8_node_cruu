import { Component } from '@angular/core';
import { environment } from '@env';
import { HttpClient } from '@angular/common/http';
import { UserService } from '@services';

@Component({
	selector: 'app-api',
	templateUrl: './api.component.html',
	styleUrls: ['./api.component.scss']
})
export class ApiComponent {
	public modules:any = [{
		name: 'User',
		description: ""
	}, {
		name: 'Event',
		description: ""
	}, {
		name: 'Category',
		description: ""
	}, {
		name: 'File',
		description: ""
	}, {
		name: 'Group',
		description: ""
	}, {
		name: 'Inventory',
		description: ""
	}, {
		name: 'Job',
		description: ""
	}, {
		name: 'Label',
		description: ""
	}, {
		name: 'Location',
		description: ""
	}, {
		name: 'Organization',
		description: ""
	}, {
		name: 'Position',
		description: ""
	}, {
		name: 'Rate',
		description: ""
	}];
	public module = this.modules[0].name;
	public roles:any = [{
		name: 'Guest',
		description: "User which don't have yet account or have to sign in."
	}, {
		name: 'Memeber',
		description: "User which have signed in, but don't have admin authority"
	}, {
		name: 'Admin',
		description: "User which have admin authority"
	}];
	private url = environment.applicationURI + '/api/restapi';
	public routes:any = [{role:{}},{role:{}},{role:{}}];
	public _routes:any = {};
	constructor(private http: HttpClient, private us: UserService){
		this.http.get('/api/restapi/get').subscribe((routes:any)=>{
			for (let i = 0; i < routes.length; i++){
				if(!this._routes[routes[i].model]){
					this._routes[routes[i].model]=[];
				}
				if(!routes[i].role) routes[i].role={};
				this._routes[routes[i].model].push(routes[i]);
			}
		});
	}
	create(route:any={}){
		route.model = this.module;
		this.http.post('/api/restapi/create', route).subscribe((created:any)=>{
			if(!created.role) created.role={};
			if(!this._routes[this.module]){
				this._routes[this.module] = [];
			}
			if(created){
				this._routes[this.module].push(created);
			}
		});
	}
	update(route){
    	this.us.afterWhile(route, ()=>{
			this.http.post('/api/restapi/update', route).subscribe(routes=>{});
		});
	}
	delete(route){
		this.http.post('/api/restapi/delete', {
			_id: route._id
		}).subscribe(routes=>{});
	}
}
