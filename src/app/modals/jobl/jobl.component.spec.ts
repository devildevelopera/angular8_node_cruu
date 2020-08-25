import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblComponent } from './jobl.component';

describe('JoblComponent', () => {
  let component: JoblComponent;
  let fixture: ComponentFixture<JoblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
