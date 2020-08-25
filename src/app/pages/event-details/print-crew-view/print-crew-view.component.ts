import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-print-crew-view',
  templateUrl: './print-crew-view.component.html',
  styleUrls: ['./print-crew-view.component.scss']
})
export class PrintCrewViewComponent implements OnInit, AfterViewInit {
  public dates = [];
  public title: string;
  public crew = [];
  constructor(public storage: LocalStorageService) { }

  ngOnInit() {
    this.setupDates();
    var css = '@page { size: landscape; }',
      head = document.head || document.getElementsByTagName('head')[0],
      style: any = document.createElement('style');

    style.type = 'text/css';
    style.media = 'print';
    style.styleSheet
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }

  ngAfterViewInit(): void {
    window.print();
    window.history.back();
    this.storage.clear('print-document')
  }


  doesCrewExist(crew): boolean {
    return this.crew.find((x) => {
      return crew._id === x._id;
    });
  }

  setupDates(): void {
    let event = this.storage.retrieve('print-document');
    this.title = event.title;
    this.dates = Object.keys(event.dateCrew);
    this.dates.forEach((date) => {
      event.dateCrew[date].forEach((crew) => {
        if (!this.doesCrewExist(crew)) {
          const crewObject = {
            name: crew.firstName + ' ' + crew.lastName,
            position: crew.position,
            phoneNumber: crew.phoneNumber,
            _id: crew._id,
            [date]: crew.callTime
          }
          this.crew.push(crewObject);
        } else {
          let index = this.crew.findIndex(x => x._id === crew._id);
          this.crew[index][date] = crew.callTime;
        }
      });
    });
  }
}
