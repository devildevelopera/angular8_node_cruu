import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelcComponent } from './labelc.component';

describe('LabelcComponent', () => {
  let component: LabelcComponent;
  let fixture: ComponentFixture<LabelcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
