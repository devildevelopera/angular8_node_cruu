import { Component } from '@angular/core';
import { UserService, JobService, OrganizationService, EventService } from '@services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobComponent, JoblComponent } from '@modals';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})

export class ListComponent {
	public dropdown:any = null;
	constructor(public us: UserService,
		private modalService: NgbModal,
		public es: EventService,
		public os: OrganizationService,
		public js: JobService) {}
	edit(job) {
		const modalRef = this.modalService.open(JobComponent, {size: 'lg'});
		modalRef.componentInstance.job = JSON.parse(JSON.stringify(job));
		modalRef.componentInstance.init();
		modalRef.componentInstance.save.subscribe((crew) => {
			console.log(crew);
		});
	}
	view(job) {
		const modalRef = this.modalService.open(JoblComponent, {size: 'lg'});
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
}
