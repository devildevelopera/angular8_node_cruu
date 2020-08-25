import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilExampleComponent } from './util-example.component';

describe('UtilExampleComponent', () => {
  let component: UtilExampleComponent;
  let fixture: ComponentFixture<UtilExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
