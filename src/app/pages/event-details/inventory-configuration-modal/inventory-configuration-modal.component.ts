import { Component, OnInit, Input } from '@angular/core';
import { Broadcaster } from '../../../utils/broadcaster';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Component({
  selector: 'app-inventory-configuration-modal',
  templateUrl: './inventory-configuration-modal.component.html',
  styleUrls: ['./inventory-configuration-modal.component.scss']
})
export class InventoryConfigurationModalComponent implements OnInit {

  isShown = false;
  subTitle: any;
  inventory: any;
  allAvailableInventory: any;
  positionList: Array<any> = [];
  constructor(public broadcaster: Broadcaster,
    public http: HttpClient) { }

  ngOnInit() {
    this.broadcaster.listen('toggleInventoryModal').subscribe((res) => {
      this.toggleShow();
      this.subTitle = res.data.date;
      this.inventory = res.data.event;
    });

    this.http.get(environment.applicationURI + '/api/getInventory').subscribe((res: any) => {
      this.allAvailableInventory = res;
    });
  }

  toggleShow(): void {
    this.isShown = !this.isShown;
  }
}
