import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'time'
})
export class TimePipe implements PipeTransform {
	transform(time): any {
		if(!time) return '';
		let time_str = (time.hour % 12 < 10 && '0' || '') + (time.hour % 12) + ':';
		if(time_str == '00:') time_str = '12:';
		time_str += (time.minute < 10 && '0' || '') + time.minute;
		time_str += time.hour >= 12 && 'pm' || 'am';
		return time_str;
	}
}
