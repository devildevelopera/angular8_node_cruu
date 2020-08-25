import { Component, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent {
	public title: any = '';
	public message: any = '';
	public placeholder: any = '';
	@Output() save: EventEmitter<any> = new EventEmitter();
	@Output() cancel: EventEmitter<any> = new EventEmitter();
	constructor(public modal: NgbActiveModal) {}
	submit() {
		this.save.emit(this.message);
		this.modal.close();
	}
}
