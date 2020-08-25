import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-event-row',
  templateUrl: './user-event-row.component.html',
  styleUrls: ['./user-event-row.component.scss']
})
export class UserEventRowComponent implements OnInit {
  @Input() event;
  @Input() isEven;
  @Input() user;
  constructor() { }

  ngOnInit() {
  }

}
