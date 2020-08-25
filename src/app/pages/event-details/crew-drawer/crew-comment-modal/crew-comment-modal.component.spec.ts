import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCommentModalComponent } from './crew-comment-modal.component';

describe('CrewCommentModalComponent', () => {
  let component: CrewCommentModalComponent;
  let fixture: ComponentFixture<CrewCommentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewCommentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewCommentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
