import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
	providedIn: 'root'
})
export class PositionConfigurationService {
	private url = environment.applicationURI + '/api/position';
	public _positions = {};
	public done:any = false;
	constructor(public http: HttpClient) {
		this.http.get(this.url+'/get').subscribe((resp:any) => {
			for(let i = 0; i < resp.length; i++){
				this._positions[resp[i].organizationId] = [];
				for(let each in resp[i]){
					if(each=='organizationId') continue;
					if(each=='_id') continue;
					this._positions[resp[i].organizationId].push(resp[i][each]);
				}
			}
            this.done = true;
            console.log("this.position>>",this._positions);
            
		});
	}
	getPositions(organizationId: string): Observable<any> {
		return this.http.get<any>(environment.applicationURI + '/api/getPositions/'
			+ organizationId).pipe(catchError(this.handleError<any>()));
	}
	updatePositions(positions: any): Observable<any>  {
		return this.http.post<any>(environment.applicationURI + '/api/saveConfig', positions);
	}
	private handleError<T>(result?: T) {
		return (error: any): Observable<T> => {
			return of(result as T);
		};
	}
}
