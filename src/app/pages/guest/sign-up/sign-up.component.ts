import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm;
  public errorMessage;
  public sendToken: string;
  private userId: string;
  public loading = false;

  public organizationPositions = [];
  public dropdownSettings: IDropdownSettings = {};

  public disableSignUp = false;

  constructor(public formBuilder: FormBuilder,
    public http: HttpClient,
    public storage: LocalStorageService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.loading = true;

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All'
    };

    this.signUpForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      address2: new FormControl(''),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zip: new FormControl(null, Validators.required),
      emergencyContactName: new FormControl('', Validators.required),
      emergencyContact: new FormControl('', Validators.required),
      selectedPositions: new FormControl(),
      organizationName: new FormControl('', Validators.required)
    });

    this.route.queryParams.subscribe(params => {
      this.sendToken = params.token;
      if (this.sendToken) {
        this.http.get<any>(environment.applicationURI + '/api/validateNewMemberToken/' + this.sendToken).subscribe(res => {
          if (res.isError) {
            this.errorMessage = res.message;
            this.disableSignUp = true;
          } else {
            this.userId = res.data._id;
            this.signUpForm.controls.email.setValue(res.data.email);
            this.signUpForm.controls.email.disable();
            this.signUpForm.controls.organizationName.setValue(res.data.organizations[0]._id.name);
            this.signUpForm.controls.organizationName.disable();
            this.http.get(environment.applicationURI + '/api/getPositions/' + res.data.organizations[0]._id._id).subscribe((res: any) => {
              Object.keys(res).forEach(key => {
                const position = res[key];
                if (Object(position) === position) {
                  this.organizationPositions = this.organizationPositions.concat({
                    value: position.value,
                    label: position.label
                  });
                }
              });
              this.organizationPositions = this.organizationPositions;
            });
          }
          this.loading = false;
        });
      } else {
        this.loading = false;
      }
    });
  }

  signUp(): any {
    this.loading = true;
    this.errorMessage = null;
    if (!this.signUpForm.controls.email.value ||
      !this.signUpForm.controls.password.value ||
      !this.signUpForm.controls.firstName.value ||
      !this.signUpForm.controls.lastName.value ||
      !this.signUpForm.controls.organizationName.value) {
      this.errorMessage = 'All fields required';
      return this.loading = false;
    }
    
    const saveUserObject: any = {
      email: this.signUpForm.controls.email.value||'',
      password: this.signUpForm.controls.password.value||'',
      firstName: this.signUpForm.controls.firstName.value||'',
      lastName: this.signUpForm.controls.lastName.value||'',
      organizationName: this.signUpForm.controls.organizationName.value||'',
      phoneNumber: this.signUpForm.controls.phoneNumber.value||'',
      address: this.signUpForm.controls.address.value||'',
      address2: this.signUpForm.controls.address2.value||'',
      city: this.signUpForm.controls.city.value||'',
      state: this.signUpForm.controls.state.value||'',
      zip: this.signUpForm.controls.zip.value||'',
      emergencyContactName: this.signUpForm.controls.emergencyContactName.value||'',
      emergencyContact: this.signUpForm.controls.emergencyContact.value||'',
      mode: 'Save'
    };
    if (this.sendToken) {
      saveUserObject.mode = null;
      saveUserObject._id = this.userId;
      saveUserObject.positions = [];
      if(!this.signUpForm.controls.selectedPositions.value){
        this.signUpForm.controls.selectedPositions.value = [];
      }
      this.signUpForm.controls.selectedPositions.value.forEach((position, index) => {
        saveUserObject.positions.push(position.value);
      });
    }
    this.http.post(environment.applicationURI + '/api/user/signup-local', saveUserObject).subscribe((res: any) => {
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
        this.loading = false;
      });
    });
  }

}
