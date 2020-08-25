import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewConfigComponent } from './crew-config.component';

describe('CrewConfigComponent', () => {
  let component: CrewConfigComponent;
  let fixture: ComponentFixture<CrewConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
