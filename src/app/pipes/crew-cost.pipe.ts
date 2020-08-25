import { Pipe, PipeTransform } from '@angular/core';
import { TimeService, JobService } from '@services';

@Pipe({
	name: 'crewCost'
})
export class CrewCostPipe implements PipeTransform {
	constructor(private time: TimeService, private js: JobService){}
	transform(event: any, date:any, refresh:any): any {
		let cost = 0;
		if(date){
			event = this.js.byEvent[event._id+date];
		}else{
			event = this.js.byEvent[event._id];
		}
		if(!event || !event.length){
			return 0;
		}
		for (let i = 0; i < event.length; i++){
			if(event[i].rate){
				cost += Number(event[i].rate * this.time.diff(event[i].times.from, event[i].times.to).total);
			}else if(event[i].fixed){
				cost += Number(event[i].fixed);
			}
			if(event[i].extra){
				cost += Number(event[i].extra);
			}
		}
		return Number(cost);
	}
}
