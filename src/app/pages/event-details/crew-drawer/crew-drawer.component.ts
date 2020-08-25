import { Component, Input } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { RateService, UserService, JobService } from '@services';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrewCommentModalComponent } from './crew-comment-modal/crew-comment-modal.component';
import { JobvComponent } from '@modals';

@Component({
	selector: 'crew-drawer',
	templateUrl: './crew-drawer.component.html',
	styleUrls: ['./crew-drawer.component.scss']
})
export class CrewDrawerComponent {
	@Input() date;
	@Input() event;
	@Input() fullEvent;
	@Input() title;
	@Input() positionConfigurationMap;
	constructor(public us: UserService,
		public js: JobService,
		public rs: RateService,
    	private modalService: NgbModal) {}
	view(job) {
		const modalRef = this.modalService.open(JobvComponent, {size: 'lg'});
		modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
		modalRef.componentInstance.save.subscribe((saved) => {
			for (let each in saved){
				job[each] = saved[each];
			}
			for (let each in job){
				job[each] = saved[each];
			}
		});
	}
	color(crewMember){
		let prefix = this.fullEvent._id+crewMember.assigned+this.date;
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
	rate(rate, crewMember){
		this.rs.create({
			rate: rate,
			user: this.us.user._id,
			code: crewMember.assigned,
			event: this.fullEvent._id,
			day: this.date
		});
	}

	displayCommentTooltip(crewMemberId) {
		let comment = '';
		if(this.fullEvent.crewComments && this.fullEvent.crewComments[crewMemberId]) {
			comment = this.fullEvent.crewComments[crewMemberId];
		}

		return comment;
	}

	editComment(crewMember) {
    	const modalRef = this.modalService.open(CrewCommentModalComponent, {size: 'lg'});
    	modalRef.componentInstance.initialize(this.fullEvent, crewMember);
		modalRef.componentInstance.saveCommentEvent.subscribe((comment) => {
			if (!this.fullEvent.crewComments) {
				this.fullEvent.crewComments = {};
			}

			this.fullEvent.crewComments[crewMember._id] = comment;

			modalRef.close();
		});
	}
}
