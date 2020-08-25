import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TimeService {
	constructor(){}
	to(from){
		let time:any = {second:0};
		from = from.split(' ').join('').split(':');
		time.hour = Math.floor(from[0]);
		time.minute = Math.floor(from[1].slice(0, 2));
		time.kind = from[1].slice(2, 4).toLowerCase();
		if(time.kind=='pm'){
			time.hour += 12;
		}
		return time;
	}
	diff(from, to){
		let second = to.second - from.second;
		if(second < 0){
			second = 60 - second;
			to.minute--;
		}
		let minute = to.minute - from.minute;
		if(second < 0){
			minute = 60 - minute;
			to.hour--;
		}
		return {
			total: (to.hour - from.hour) + ( minute / 60) + ( second / 60),
			hour: to.hour - from.hour,
			minute: minute,
			second: second
		};
	}
}
