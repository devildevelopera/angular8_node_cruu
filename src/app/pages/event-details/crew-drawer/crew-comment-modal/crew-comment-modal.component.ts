import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';
import { UserService } from '@services';

@Component({
  selector: 'app-crew-comment-modal',
  templateUrl: './crew-comment-modal.component.html',
  styleUrls: ['./crew-comment-modal.component.scss']
})
export class CrewCommentModalComponent implements OnInit {
  public event;
  public job;
  public comment;
  @Output() saveCommentEvent: EventEmitter<any> = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,
    public us: UserService,
    public http: HttpClient) { }
  ngOnInit() {}
  initialize(event: any, job: any) {
    if (!job.comments) {
      job.comments = {};
    }
    this.comment = job.comments[this.us.user._id] || '';
    this.event = event;
    this.job = job;
  }
  saveComment() {
    this.job.comments[this.us.user._id] = this.comment;
    this.http.post(environment.applicationURI + '/api/job/comment', {
      _id: this.job._id,
      comment: this.comment
    }).subscribe((res: any) => {});
    this.activeModal.close();
  }
  closeModal() {
    this.activeModal.close();
  }
}
