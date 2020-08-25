import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '@services';

@Pipe({
	name: 'jobs'
})
export class JobsPipe implements PipeTransform {
	constructor(private us: UserService) {}
	transform(jobs: any): any {
		jobs = Array.isArray(jobs) && jobs.slice() || [];
		for(let i = jobs.length-1; i >= 0; i--){
			if(!jobs[i].active && jobs[i].assigned!=this.us.user._id ) jobs.splice(i, 1);
		}
		return jobs;
	}
}
