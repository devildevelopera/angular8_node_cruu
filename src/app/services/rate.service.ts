import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Injectable({
	providedIn: 'root'
})
export class RateService {
	private url = environment.applicationURI + '/api/rate';
	public rates:any = [];
	public _rates:any = {};
	constructor(private http: HttpClient) {
		this.http.get(this.url+'/get').subscribe(resp => {
			this.rates = resp;
			for(let i = 0; i < this.rates.length; i++){
				this.calculate(this.rates[i]);
			}
		});
	}
	create(rate){
		if(this._rates[rate.code]){
			this.rated_counter[rate.code]--;
			this.rated_total[rate.code] -= this._rates[rate.code].rate;

			let prefix = rate.event+rate.code+rate.day;
			if(this._rates[prefix]){
				this.rated_counter[prefix]--;
				this.rated_total[prefix] -= this._rates[prefix].rate;
			}

			this.calculate(rate);
			return this.update(rate);
		}
		this._rates[rate.user+rate.event+rate.code+rate.day] = rate;
		this.http.post(this.url+'/create', rate).subscribe((created:any) => {
			this.rates.push(created);
			this.calculate(created);
		});
	}
	update(rate){
		this.http.post(this.url+'/update', rate).subscribe((created:any) => {});
	}
	public rated = {};
	private rated_total = {};
	private rated_counter = {};
	calculate(rate){
		this._rates[rate.code] = rate;
		if( !this.rated_total[rate.code] ){
			this.rated_total[rate.code] = 0;
		}
		this.rated_total[rate.code] += rate.rate;
		if( !this.rated_counter[rate.code] ){
			this.rated_counter[rate.code] = 0;
		}
		this.rated_counter[rate.code]++;
		this.rated[rate.code] = this.rated_total[rate.code] / this.rated_counter[rate.code];

		let prefix = rate.event+rate.code+rate.day;
		this._rates[prefix] = rate;
		if( !this.rated_total[prefix] ){
			this.rated_total[prefix] = 0;
		}
		this.rated_total[prefix] += rate.rate;
		if( !this.rated_counter[prefix] ){
			this.rated_counter[prefix] = 0;
		}
		this.rated_counter[prefix]++;
		this.rated[prefix] = this.rated_total[prefix] / this.rated_counter[prefix];
	}
}
