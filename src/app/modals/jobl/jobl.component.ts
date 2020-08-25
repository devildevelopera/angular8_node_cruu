import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService, OrganizationService, JobService, PositionConfigurationService, RateService } from '@services';

@Component({
	selector: 'app-jobl',
	templateUrl: './jobl.component.html',
	styleUrls: ['./jobl.component.scss']
})
export class JoblComponent {
	public job:any={times:{}, date: {}, position:''};
	public dates:any = [];
	public _dates:any = {};
	public event_info:any = true;
	@Output() save: EventEmitter<any> = new EventEmitter();
	hasDate(){
		if(this.job.day) return true;
		for (let i = 0; i < this.dates.length; i++){
		    if(this._dates[this.dates[i]]) return true;
		}
		return false;
	}
	constructor(public modal: NgbActiveModal,
		public js: JobService,
		public rs: RateService,
		public ps: PositionConfigurationService,
		public os: OrganizationService,
		public us: UserService) {
		if(!this.job.position && this.ps._positions[this.os.org._id] && this.ps._positions[this.os.org._id].length) {
			this.job.position = this.ps._positions[this.os.org._id][0].value;
		}
	}
	submit() {
		if(this.job._id){
			this.save.emit(this.job);
			this.modal.close();
			return this.js.update(this.job);
		}
		for (let i = 0; i < this.dates.length; i++){
		    if(this._dates[this.dates[i]]){
		    	this.job.day = this.dates[i];
		    	this.js.create(this.job);
		    }
		}
		this.modal.close();
	}
	color(job){
		let prefix = this.job.event+job.assigned+this.job.day;
		let rate = this.rs.rated[prefix];
		if(this.rs._rates[prefix]){
			return {
				color: '#f39c12',
				width: (this.rs._rates[prefix].rate / 5 * 100)+'%'
			};
		}else{
			return {
				color: '#7f8c8d',
				width: (rate / 5 * 100)+'%'
			};
		}
	}
	rate(rate, job){
		this.rs.create({
			rate: rate,
			user: this.us.user._id,
			code: job.assigned,
			event: this.job.event,
			day: this.job.day
		});
	}
}
