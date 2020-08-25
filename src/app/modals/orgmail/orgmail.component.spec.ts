import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgmailComponent } from './orgmail.component';

describe('OrgmailComponent', () => {
  let component: OrgmailComponent;
  let fixture: ComponentFixture<OrgmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
