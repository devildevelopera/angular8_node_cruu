import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'each'
})
export class EachPipe implements PipeTransform {
	transform(obj: any, refresh: any): any {
		if(!obj) return [];
		let arr = [];
		for (let each in obj){
		    if(obj[each]) arr.push(each);
		}
		return arr;
	}
}
