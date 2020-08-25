import { Component, OnInit, Input } from '@angular/core';
import { Broadcaster } from '../../../utils/broadcaster';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '@env';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserService } from '@services';

@Component({
  selector: 'app-inventory-configuration',
  templateUrl: './inventory-configuration.component.html',
  styleUrls: ['./inventory-configuration.component.scss']
})
export class InventoryConfigurationComponent implements OnInit {
  @Input() event;
  isAdding = false;
  public dates = [];
  public positionList = [];
  public allAvailableInventory = [];
  public inventoryAssetList = [];
  public inventoryList = [];
  public selectedInventory = {
    name: ''
  };
  public newInventoryForm: FormGroup;

  public organization = { inventory: {}};

  public dropdownSettings: IDropdownSettings = {};

  constructor(public broadcaster: Broadcaster,
    public us: UserService,
    public http: HttpClient,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newInventoryForm = this.formBuilder.group({});
    const keys = Object.keys(this.event);
    this.dates = keys;
    this.broadcaster.listen('updateInventoryDateTabs').subscribe((res) => {
      this.event = res.data;
      const listenerKeys = Object.keys(this.event);
      this.dates = listenerKeys;
    });

    this.broadcaster.listen('removeInventoryFromDate').subscribe((res) => {
      this.removeInventoryFromDate(res.data);
    });

    this.http.get(environment.applicationURI + '/api/getInventory').subscribe((res: any) => {
      this.allAvailableInventory = res;
      this.inventoryList = [];
      this.allAvailableInventory.forEach((inventory) => {
        this.inventoryList.push({
          value: inventory._id,
          label: inventory.name
        });
      });
    });


    this.http.get(environment.applicationURI + '/api/getOrganization/'
      + this.us.user.organizations[0]._id).subscribe((res: any) => {
         this.organization = res;
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      limitSelection: null
    };
  }

  selectInventory(): void {
    this.allAvailableInventory.forEach((inventory) => {
      if (inventory._id === this.newInventoryForm.controls.selectedInventoryId.value) {
        this.selectedInventory = inventory;
        this.inventoryAssetList = [];
        this.organization.inventory[this.selectedInventory.name].forEach((asset) => {
          this.inventoryAssetList.push({
            value: asset,
            label: asset
          });
        });

        this.inventoryAssetList.push({value: 'Rental', label: 'Rental'});
      }
    });
  }

  modifyAssetQuantityLimit(): void {
    const newQuantity = this.newInventoryForm.controls.selectedQuantity.value;
    this.dropdownSettings = Object.assign({}, this.dropdownSettings, { limitSelection: newQuantity });

  }

  saveInventoryToDate(date): void {
    const newInventoryObject: any = this.selectedInventory;
    newInventoryObject.name = this.selectedInventory.name;
    newInventoryObject.quantity = this.newInventoryForm.controls.selectedQuantity.value;
    newInventoryObject.rate = this.newInventoryForm.controls.inventoryRate.value;
    newInventoryObject.assets = [];
    this.newInventoryForm.controls.selectedAssets.value.forEach((asset, index) => {
      newInventoryObject.assets.push(asset.value);
    });

    console.log(newInventoryObject);
    this.event[date].push(newInventoryObject);
    this.newInventoryForm.reset();
    this.isAdding = false;
    this.broadcaster.emit('updateInventoryObject', this.event);
  }

  removeInventoryFromDate(inventoryObject): void {
    const inventoryId = inventoryObject.inventoryId;
    const date = inventoryObject.date;
    this.event[date].forEach((inventory, index) => {
      if (inventory._id === inventoryId) {
        this.event[date].splice(index, 1);
      }
    });
    this.broadcaster.emit('updateInventoryObject', this.event);
  }

  addInventory(): void {
    this.newInventoryForm.addControl('selectedInventoryId', new FormControl('', Validators.required));
    this.newInventoryForm.addControl('selectedQuantity', new FormControl('', Validators.required));
    this.newInventoryForm.addControl('selectedAssets', new FormControl('', Validators.required));
    this.newInventoryForm.addControl('inventoryRate', new FormControl('', Validators.required));
    this.isAdding = true;
  }

  close(): void {
    this.isAdding = false;
  }

  toggleInventoryModal(date): void {
    const object = {
      date: date,
      event: this.event[date]
    };
    this.broadcaster.emit('toggleInventoryModal', object);
  }
}
