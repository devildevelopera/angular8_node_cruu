import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'labelsByCategory'
})
export class LabelsByCategoryPipe implements PipeTransform {
	transform(labels: any, category:any, show_inactive, refresh): any {
		labels = labels.slice();
		for(let i = labels.length-1; i >= 0; i--){
			if(labels[i].category!=category){
				labels.splice(i, 1);
			}else if(!show_inactive && !labels[i]._active){
				labels.splice(i, 1);
			}
		}
		return labels;
	}
}
