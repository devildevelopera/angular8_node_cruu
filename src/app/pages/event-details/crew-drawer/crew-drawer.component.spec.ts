import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDrawerComponent } from './crew-drawer.component';

describe('CrewDrawerComponent', () => {
  let component: CrewDrawerComponent;
  let fixture: ComponentFixture<CrewDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
