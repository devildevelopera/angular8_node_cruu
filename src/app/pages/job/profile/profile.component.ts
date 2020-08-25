import { Component } from '@angular/core';
import { JobService, OrganizationService, PositionConfigurationService } from '@services';
import { Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	public job:any = {times:{}};
	submit(){
		console.log(this.job);
		if(this.job._id){
			this.js.update(this.job, created=>{
				this.router.navigate(['jobs']);
			});
		}else{
			this.js.create(this.job, created=>{
				this.router.navigate(['jobs']);
			});
		}
	}
	isInside(date){
		return date.day==this.job.date.day && date.month==this.job.date.month && date.year==this.job.date.year;
	}
	constructor(public js: JobService,
		public router: Router,
		public ps: PositionConfigurationService,
		public os: OrganizationService) {
		let _id = window.location.pathname.replace('/job/', '');
		if(_id.toLowerCase()!='new'){
			this.js.on(()=>{
				this.job = this.js._jobs[_id];
			});
		}else if(localStorage.getItem('new_job')){
			this.job = JSON.parse(localStorage.getItem('new_job'));
			if(this.job.date){
				this.job.date = new Date(this.job.date);
				this.job.date = {
					year: this.job.date.getFullYear(),
					month: this.job.date.getMonth()+1,
					day: this.job.date.getDate()
				};
			}
			//localStorage.removeItem('new_job');
		}
	}
}