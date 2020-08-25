import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LabelService } from '@services';

@Component({
	selector: 'app-labelc',
	templateUrl: './labelc.component.html',
	styleUrls: ['./labelc.component.scss']
})
export class LabelcComponent {
	public category:any;
	public name:any = '';
	public color:any = '';
	public refresh:any = '';
	@Output() add: EventEmitter<any> = new EventEmitter();
	constructor(public modal: NgbActiveModal, public ls: LabelService) {}
	create(){
		this.ls.create({
			category: this.category.name,
			color: this.color,
			name: this.name
		}, this.refresh);
		this.modal.close();
	}
}