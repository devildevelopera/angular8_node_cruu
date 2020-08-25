import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetForm: FormGroup;
  public errorMessage: string;
  private resetToken: string;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('')
    }, {validator: this.checkPasswords });

    this.route.queryParams.subscribe(params => {
      this.resetToken = params.token;

      this.http.get<any>(environment.applicationURI + '/api/validateToken/' + this.resetToken).subscribe(res => {
        if (res.isError) {
          this.errorMessage = res.message;
        }
      });
    });
  }

  checkPasswords(group: FormGroup) {
    const passwordValue = group.get('password').value;
    const confirmPasswordValue = group.get('confirmPassword').value;

    if (passwordValue !== confirmPasswordValue) {
      return { notSame: true };
    }
    return null;
  }

  resetPassword() {
      const putData = {
        resetToken: this.resetToken,
        password: this.resetForm.controls.password.value
      };
      this.http.put(environment.applicationURI + '/api/resetPassword',
        putData).subscribe((res: any) => {
        if (!res.isError) {
          this.router.navigate(['login']);
        }
      });
  }

  sendResetLink() {
    const email = this.resetForm.controls.email.value;
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

}
