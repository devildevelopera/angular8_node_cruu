import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCrewViewComponent } from './print-crew-view.component';

describe('PrintCrewViewComponent', () => {
  let component: PrintCrewViewComponent;
  let fixture: ComponentFixture<PrintCrewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintCrewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintCrewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
