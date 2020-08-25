import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewConfigRowComponent } from './crew-config-row.component';

describe('CrewConfigRowComponent', () => {
  let component: CrewConfigRowComponent;
  let fixture: ComponentFixture<CrewConfigRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewConfigRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewConfigRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
