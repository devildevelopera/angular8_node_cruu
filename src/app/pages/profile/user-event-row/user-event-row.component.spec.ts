import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEventRowComponent } from './user-event-row.component';

describe('UserEventRowComponent', () => {
  let component: UserEventRowComponent;
  let fixture: ComponentFixture<UserEventRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEventRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEventRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
