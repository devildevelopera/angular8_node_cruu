import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { environment } from '@env';
import { OrganizationService, UserService } from '@services';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title = 'cruu';
  public user;
  public loggedIn = false;
  public expandFlyout = false;
  public alert = null;
  public userOrganization = { primaryColor: null };

  constructor(public storage: LocalStorageService,
    public us: UserService,
    public router: Router,
    public os: OrganizationService) {}

  ngOnInit(): void {
    this.storage.observe('alert').subscribe((data) => {
      this.alert = data;
      if(this.alert.yes || this.alert.no) return;
      const source = timer(5000);
      const alertTimer = source.subscribe(() => {
        this.alert = null;
      });
    });
  }

  navigateToLoginScreen() {
    switch (window.location.pathname) {
      case '/reset-password':
      case '/sign-up':
        break;
      default:
        this.router.navigate(['login']);
    }
  }

  toggle(): void {
    this.expandFlyout = !this.expandFlyout;
  }

  closeAlert(): void {
    this.alert = null;
  }

  signOut(): void {
    this.expandFlyout = false;
    this.us.logout();
  }
}
