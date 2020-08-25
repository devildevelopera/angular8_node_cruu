import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionApprovalComponent } from './position-approval.component';

describe('PositionApprovalComponent', () => {
  let component: PositionApprovalComponent;
  let fixture: ComponentFixture<PositionApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
