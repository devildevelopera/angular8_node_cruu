import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryConfigurationRowComponent } from './inventory-configuration-row.component';

describe('InventoryConfigurationRowComponent', () => {
  let component: InventoryConfigurationRowComponent;
  let fixture: ComponentFixture<InventoryConfigurationRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryConfigurationRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryConfigurationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
