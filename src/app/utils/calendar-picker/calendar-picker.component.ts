import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;
const before = (one: NgbDateStruct, two: NgbDateStruct) => 
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
  ? false : one.day < two.day : one.month < two.month : one.year < two.year;
const after = (one: NgbDateStruct, two: NgbDateStruct) => 
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
  ? false : one.day > two.day : one.month > two.month : one.year > two.year;

interface SelectedDates {
  to: NgbDateStruct,
  from: NgbDateStruct
}

@Component({
  selector: 'app-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.scss'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display:inline-block;
    height: 2rem;
    width: 2rem;
    color: #000;
  }
  .bg-light {
    height: 2rem;
  }
  .ngb-dp-week .ngb-dp-day {
    display:none;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
  .ngb-dp-week:nth-child(2) {
    justify-content: flex-end;
  }
`]
})
export class CalendarPickerComponent implements OnInit {
  hoveredDate: NgbDateStruct;
  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  @Output() datePicked = new EventEmitter();
  @Input() startDate;
  @Input() endDate;
  constructor(public calendar: NgbCalendar,
    public dateFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
    this.fromDate = this.calendar.getToday();
    this.toDate = null;
    if (this.startDate) {
      this.startDate = new Date(this.startDate);
      let startDateObject = {
        day: this.startDate.getDate(),
        month: this.startDate.getMonth() + 1,
        year: this.startDate.getFullYear()
      };
      this.fromDate = startDateObject;
      this.startDate = startDateObject;
    }
    if (this.endDate) {
      let endDate = new Date(this.endDate);
      let endDateObject = {
        day: endDate.getDate(),
        month: endDate.getMonth() + 1,
        year: endDate.getFullYear()
      };
      this.toDate = endDateObject;
    }
  }

  public pickDate(date: NgbDateStruct): void {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if ((this.fromDate && (this.fromDate === this.toDate) && after(date, this.fromDate))) {
      this.toDate = date;
    } else {
      this.toDate = date;
      this.fromDate = date;
    }
    const dates: SelectedDates = {
      to: this.toDate,
      from: this.fromDate
    };
    
    this.datePicked.emit(dates);
  }

  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

}
