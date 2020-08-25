import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnConfigurationFlyoutComponent } from './column-configuration-flyout.component';

describe('ColumnConfigurationFlyoutComponent', () => {
  let component: ColumnConfigurationFlyoutComponent;
  let fixture: ComponentFixture<ColumnConfigurationFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnConfigurationFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnConfigurationFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
