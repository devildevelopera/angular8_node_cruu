import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { UserService } from '@services';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
	public daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	public events = [];
	public displayEvents = {};
	public displayDates = [];
	protected user: any = {};
	constructor(public http: HttpClient, public us: UserService) { }

	ngOnInit() {
		this.http.get(environment.applicationURI + '/api/getEvents/' + this.us.user._id).subscribe((res: Array<any>) => {
			this.events = res;
			this.sortEvents();
		});
	}

	sortEvents(): void {
		this.events.forEach((event) => {
			if (!this.displayEvents[event.date]) {
				this.displayEvents[event.date] = [];
				this.displayDates.push(event.date);
			}
			this.displayEvents[event.date].push(event);
		});
	}

}
