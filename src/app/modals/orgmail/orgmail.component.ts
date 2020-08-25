import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { UserService, HttpService, OrganizationService } from '@services';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
	selector: 'app-orgmail',
	templateUrl: './orgmail.component.html',
	styleUrls: ['./orgmail.component.scss']
})
export class OrgmailComponent {
	public email:any = {};
	constructor(public modal: NgbActiveModal,
		public https: HttpService,
		private storage: LocalStorageService,
		private us: UserService,
		private os: OrganizationService,
		private http: HttpClient){}
	submit(){
		this.https.spin = true;
		this.email.to = [];
		for (let i = 0; i < this.us.users_current.length; i++){
			this.email.to.push({
				name: this.us.users_current[i].firstName + ' ' + this.us.users_current[i].lastName,
				email: this.us.users_current[i].email
			});
		}
		this.email.OrgName = this.os.org.name;
		this.http.post(environment.applicationURI + '/api/org/inform', this.email).subscribe((data) => {
			this.https.spin = false;
			if(data){
				this.storage.store('alert', {
					type: 'success',
					message: 'Emails has been sent'
				});
			}
		});
		this.modal.close();
	}
}