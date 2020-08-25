import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewmailComponent } from './crewmail.component';

describe('CrewmailComponent', () => {
  let component: CrewmailComponent;
  let fixture: ComponentFixture<CrewmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
