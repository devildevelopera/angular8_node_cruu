import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@env';
import { MongoService } from 'wacom';

@Injectable({
	providedIn: 'root'
})
export class OrganizationService {
	private url = environment.applicationURI + '/api/org';
	public org:any = {};
	public _orgs:any = {};
	public orgs:any = [];
	constructor(private http: HttpClient,
		private mongo: MongoService,
		public storage: LocalStorageService) {
            console.log("orgnization service called.");
    	this.org = this.storage.retrieve('org');
		this.http.get(this.url+'/get').subscribe(resp => {
			this.orgs = resp;
			for(let i = 0; i < this.orgs.length; i++){
				this._orgs[this.orgs[i]._id] = this.orgs[i];
			}
			this.org = resp[0] || {};
    		this.storage.store('org', this.org);
		});
	}
	update(org){
		if(org._id == this.org._id){
			this.org = org;
			this.storage.store('org', this.org);
		}
		this.http.post(this.url+'/update', org).subscribe((data) => {
			
		});
	}
	save(org){
		this.mongo.afterWhile(org, ()=>{
			if(org._id == this.org._id){
				this.org = org;
				this.storage.store('org', this.org);
			}
			this.http.post(this.url+'/update', org).subscribe((data) => {
				
			});
		});
	}
	getUserOrganization(): Observable<any> {
		return this.storage.observe('userOrganization').pipe(catchError(this.handleError<any>({primaryColor: null})));
	}
	private handleError<T>(result?: T) {
		return (error: any): Observable<T> => {
			return of(result as T);
		};
	}
	public states = [{
		name: 'Alabama',
		value: 'Alabama'
	}, {
		name: 'Alaska',
		value: 'Alaska'
	}, {
		name: 'Arizona',
		value: 'Arizona'
	}, {
		name: 'Arkansas',
		value: 'Arkansas'
	}, {
		name: 'California',
		value: 'California'
	}, {
		name: 'Colorado',
		value: 'Colorado'
	}, {
		name: 'Connecticut',
		value: 'Connecticut'
	}, {
		name: 'Delaware',
		value: 'Delaware'
	}, {
		name: 'Florida',
		value: 'Florida'
	}, {
		name: 'Georgia',
		value: 'Georgia'
	}, {
		name: 'Hawaii',
		value: 'Hawaii'
	}, {
		name: 'Idaho',
		value: 'Idaho'
	}, {
		name: 'Illinois',
		value: 'Illinois'
	}, {
		name: 'Indiana',
		value: 'Indiana'
	}, {
		name: 'Iowa',
		value: 'Iowa'
	}, {
		name: 'Kansas',
		value: 'Kansas'
	}, {
		name: 'Kentucky',
		value: 'Kentucky'
	}, {
		name: 'Louisiana',
		value: 'Louisiana'
	}, {
		name: 'Maine',
		value: 'Maine'
	}, {
		name: 'Maryland',
		value: 'Maryland'
	}, {
		name: 'Massachusetts',
		value: 'Massachusetts'
	}, {
		name: 'Michigan',
		value: 'Michigan'
	}, {
		name: 'Minnesota',
		value: 'Minnesota'
	}, {
		name: 'Mississippi',
		value: 'Mississippi'
	}, {
		name: 'Missouri',
		value: 'Missouri'
	}, {
		name: 'Montana',
		value: 'Montana'
	}, {
		name: 'Nebraska',
		value: 'Nebraska'
	}, {
		name: 'Nevada',
		value: 'Nevada'
	}, {
		name: 'New Hampshire',
		value: 'New Hampshire'
	}, {
		name: 'New Jersey',
		value: 'New Jersey'
	}, {
		name: 'New Mexico',
		value: 'New Mexico'
	}, {
		name: 'New York',
		value: 'New York'
	}, {
		name: 'North Carolina',
		value: 'North Carolina'
	}, {
		name: 'North Dakota',
		value: 'North Dakota'
	}, {
		name: 'Ohio',
		value: 'Ohio'
	}, {
		name: 'Oklahoma',
		value: 'Oklahoma'
	}, {
		name: 'Oregon',
		value: 'Oregon'
	}, {
		name: 'Pennsylvania',
		value: 'Pennsylvania'
	}, {
		name: 'Rhode Island',
		value: 'Rhode Island'
	}, {
		name: 'South Carolina',
		value: 'South Carolina'
	}, {
		name: 'South Dakota',
		value: 'South Dakota'
	}, {
		name: 'Tennessee',
		value: 'Tennessee'
	}, {
		name: 'Texas',
		value: 'Texas'
	}, {
		name: 'Utah',
		value: 'Utah'
	}, {
		name: 'Vermont',
		value: 'Vermont'
	}, {
		name: 'Virginia',
		value: 'Virginia'
	}, {
		name: 'Washington',
		value: 'Washington'
	}, {
		name: 'West Virginia',
		value: 'West Virginia'
	}, {
		name: 'Wisconsin',
		value: 'Wisconsin'
	}, {
		name: 'Wyoming',
		value: 'Wyoming'
	}];


}
