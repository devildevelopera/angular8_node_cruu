import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Injectable } from '@angular/core';
import { UserService } from '@services';
import { Observable } from 'rxjs';

@Injectable()
export class Authenticated implements CanActivate {
	constructor(private storage: LocalStorageService, private router: Router) {}
	canActivate(){
		if ( this.storage.retrieve('user') ) {
			return true;
		} else {
			this.storage.store('back_url', window.location.pathname);
			this.router.navigate(['/login']);
			return false;
		}
	}
}

@Injectable()
export class Guest implements CanActivate {
	constructor(private storage: LocalStorageService, private router: Router) {}
	canActivate(){
		if ( this.storage.retrieve('user') ) {
			this.router.navigate(['/dashboard'])
			return false;
		} else {
			return true;
		}
	}
}

@Injectable()
export class Admins implements CanActivate {
	constructor(private storage: LocalStorageService, private router: Router) {}
	canActivate(){
		let user = this.storage.retrieve('user');
		if ( user ) {
			if(user.isAdmin) return true;
			this.router.navigate(['/dashboard']);
			return false;
		} else {
			this.storage.store('back_url', window.location.pathname);
			this.router.navigate(['/login']);
			return false;
		}
	}
}