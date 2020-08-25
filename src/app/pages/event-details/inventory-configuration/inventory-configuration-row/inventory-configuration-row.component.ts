import { Component, OnInit, Input } from '@angular/core';
import { Broadcaster } from '../../../../utils/broadcaster';

@Component({
  selector: 'app-inventory-configuration-row',
  templateUrl: './inventory-configuration-row.component.html',
  styleUrls: ['./inventory-configuration-row.component.scss']
})
export class InventoryConfigurationRowComponent implements OnInit {

  @Input() inventory;
  @Input() isLast;
  @Input() isEven;
  @Input() deleteInventory;
  @Input() date;
  constructor(public broadcaster: Broadcaster) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.broadcaster.emit('removeInventoryFromDate', {
      inventoryId: this.inventory._id,
      date: this.date
    });
  }

}
