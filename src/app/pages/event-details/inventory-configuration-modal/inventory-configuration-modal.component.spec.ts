import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryConfigurationModalComponent } from './inventory-configuration-modal.component';

describe('InventoryConfigurationModalComponent', () => {
  let component: InventoryConfigurationModalComponent;
  let fixture: ComponentFixture<InventoryConfigurationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryConfigurationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryConfigurationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
