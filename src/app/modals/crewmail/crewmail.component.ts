import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { UserService, HttpService, OrganizationService, JobService } from '@services';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
	selector: 'app-crewmail',
	templateUrl: './crewmail.component.html',
	styleUrls: ['./crewmail.component.scss']
})
export class CrewmailComponent {
	public dates:any = [];
	public _dates:any = {};
	public _id:any = [];
	public _selected:any = {};
	public email:any = {};
	init(){
		for (let i = 0; i < this.dates.length; i++){
			this._dates[this.dates[i]] = true;
			for (let j = 0; j < this.js.byEvent[this._id+this.dates[i]].length; j++){
				let job = this.js.byEvent[this._id+this.dates[i]][j];
				if(!job.assigned) continue;
				this._selected[job.assigned] = true;
			}
		}
		this.email.dates = this.dates[0];
		if(this.dates.length>1){
			this.email.dates += ' - ' + this.dates[this.dates.length-1];
		}
	}
	select(date){
		for (let i = 0; i < this.js.byEvent[this._id+date].length; i++){
			let job = this.js.byEvent[this._id+date][i];
			if(!job.assigned) continue;
		    this._selected[job.assigned] = this._dates[date];
		}
	}
	constructor(public modal: NgbActiveModal,
		public js: JobService,
		public https: HttpService,
		private storage: LocalStorageService,
		public os: OrganizationService,
		private us: UserService,
		private http: HttpClient){
		this.init();
	}
	submit(){
		this.https.spin = true;
		this.email.users = [];
		for(let each in this._selected){
			this.email.users.push(this.us._users[each].email);
		}		
		this.http.post(environment.applicationURI + '/api/job/inform', this.email).subscribe((data) => {
			this.https.spin = false;
			if(data){
				this.storage.store('alert', {
					type: 'success',
					message: 'Emails has been sent'
				});
			}
		});
		this.modal.close();
	}
}


/*
<div class="email-date">
	<span>Position</span>
	<ng-container *ngFor="let position of ps._positions[os.org._id]">
		<div *ngIf="us.org_pos[os.org._id+position.value]?.length">
			<!-- <label class="waw-checkbox">
				<input type="checkbox" [(ngModel)]="_position[position.value]" name="date">
				<span>{{position.label}}</span>
				<span class="checkmark"></span>
			</label> -->
			<div>{{position.label}}</div>
			<label *ngFor="let user of us.org_pos[os.org._id+position.value]; let i = index">
				<input type="checkbox" [(ngModel)]="_users[user._id]" name="date">
				<span class="ml-2">{{user.lastName}} <span></span>{{user.firstName}}</span>
			</label>
		</div>
	</ng-container>
</div>
	init(){
		if(!this.ps.done){
			return setTimeout(this.init.bind(this), 100);
		}
		// if(Array.isArray(this.ps._positions[this.os.org._id])){
		// 	for (let i = 0; i < this.ps._positions[this.os.org._id].length; i++){
		// 		this._position[this.ps._positions[this.os.org._id][i].value]=true;
		// 	}
		// }
		for (let j = 0; j < this.dates.length; j++){
			for (let i = 0; i < this.js.byEvent[this._id+this.dates[j]].length; i++){
				let job = this.js.byEvent[this._id+this.dates[j]][i];
				if(!job.assigned) continue;
				this._users[job.assigned] = true;
			}
		}
	}




let _users = {};
		for (let each in this._dates){
			if(this._dates[each]){
				for (let i = 0; i < this._dates_users[each].length; i++){
					if(this._dates_users[each][i].assigned){
						_users[this._dates_users[each][i].assigned] = true;
					}
				}
			}
		}
		let _users_approved = {};
		for (let i = 0; i < this.ps._positions[this.os.org._id].length; i++){
			let value = this.ps._positions[this.os.org._id][i].value;
			let users = this.us.org_pos[this.os.org._id+value];
			if(!Array.isArray(users) || !users.length) continue;
			for (let j = 0; j < users.length; j++){
				_users_approved[users[j]._id] = users[j];
			}
		}

		this.email.users = [];
		for (let each in _users){
			if(_users_approved[each]){
				this.email.users.push(_users_approved[each].email);
			}
		}



*/