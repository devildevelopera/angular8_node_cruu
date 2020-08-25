import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { environment } from '@env';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	public errorMessage: string;
	public forgotPasswordActive: boolean;
	public toggleFormLabel: string;
	constructor(public formBuilder: FormBuilder,
		public http: HttpClient,
		public storage: LocalStorageService,
		public router: Router) {
		this.forgotPasswordActive = false;
		this.toggleFormLabel = 'Forgot Password?';
	}
	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required)
		});
	}
	login(): void {
		if (!this.loginForm.controls.username.value ||
			!this.loginForm.controls.password.value) {
			this.errorMessage = 'All fields required';
		} else {
            
			this.http.post(environment.applicationURI + '/api/user/login-local', {
                
				username: this.loginForm.controls.username.value,
				password: this.loginForm.controls.password.value
			}).subscribe((res: any) => {
               
				this.storage.store('user', res);
				this.http.get(environment.applicationURI + '/api/getOrganization/'
					+ res.organizations[0]._id).subscribe((organizationResult: any) => {
					this.storage.store('userOrganization', organizationResult);
					this.storage.store('org', organizationResult);
					let back_url = this.storage.retrieve('back_url');
					if(back_url && back_url.toLowerCase()!='/login'){
						this.router.navigate([this.storage.retrieve('back_url')]);
					}else{
						this.router.navigate(['dashboard']);
					}
					this.storage.clear('back_url');
				});
			}, (err) => {
				if (err) {
					this.errorMessage = 'Incorrect username/password';
				}
			});
		}
	}
	handleSubmitForm() {
		if (this.forgotPasswordActive) {
			this.forgotPassword();
		} else {
			this.login();
		}
	}
	forgotPassword() {
		const email = this.loginForm.controls.username.value;
		if (!email) {
			this.errorMessage = 'Email required';
		} else {
			const putData = {
				username: email
			};
			this.http.put(environment.applicationURI
				+ '/api/forgotPassword', putData).subscribe((res: any) => {
					this.errorMessage = 'Check your email for the reset link.';
			});

		}
	}
	toggleForm() {
		this.forgotPasswordActive = !this.forgotPasswordActive;

		if (this.forgotPasswordActive) {
			this.toggleFormLabel = 'Cancel';
		} else {
			this.toggleFormLabel = 'Forgot Password?';
		}

		return false;
	}

}
