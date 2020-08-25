import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'inventory-drawer',
  templateUrl: './inventory-drawer.component.html',
  styleUrls: ['./inventory-drawer.component.scss']
})
export class InventoryDrawerComponent implements OnInit {
  @Input() event;
  @Input() title;
  public averageRating: any = 'N/A';
  public ratings = [];
  constructor() { }

  ngOnInit() {
  }
}
