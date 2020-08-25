import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@services';

@Component({
	selector: 'event-row',
	templateUrl: './row.component.html',
	styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
	@Input() events;
	constructor(private us: UserService) { }
	ngOnInit() {
		this.checkForCallTime();
	}
	checkForCallTime(): void {
		this.events.forEach((event) => {
			let keys = Object.keys(event.crew);
			keys.forEach((key) => {
				event.crew[key].forEach((crew) => {
					if (crew._id === this.us.user._id) {
						event.userCallTime = crew.callTime;
					}
				});
			});
		});
	}
}
