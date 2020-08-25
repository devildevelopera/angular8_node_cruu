import { Component, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { cloneDeep } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env';

@Component({
  selector: 'app-position-approval',
  templateUrl: './position-approval.component.html',
  styleUrls: ['./position-approval.component.scss']
})
export class PositionApprovalComponent {

  public availableJobs: any;
  public availableDates = [];

  public newCrewForm: FormGroup;

  public dateForms = {};
  public linkedJobForms = {};
  public event: any;
  public newApplicants = {};

  constructor(public activeModal: NgbActiveModal,
    public formBuilder: FormBuilder,
    public http: HttpClient) {
    this.newCrewForm = this.formBuilder.group({
      dateForms: new FormArray([])
    });
  }

  closeModal() {
    this.activeModal.close();
  }

  get crewFormControls() {
    return this.newCrewForm.controls;
  }

  get dateFormControls() {
    return this.crewFormControls.dateForms as FormArray;
  }

  initialize(event: any) {
    this.event = event;

    console.log(this.event.crew);
    const datesWithAvailablePositions = [];
    const availableJobs = {};

    const applicantIds = [];

    Object.keys(this.event.crew).forEach(date => {
      this.event.crew[date].forEach(position => {
        // If there are applicants for a position show it in the dialog screen
        // it is possible for a position to be open but no one has applied to it
        if (position.newApplicants && position.newApplicants.length > 0) {
          if (!datesWithAvailablePositions.includes(date)) {
            datesWithAvailablePositions.push(date);
            availableJobs[date] = [];
          }
          availableJobs[date].push(position);

          position.newApplicants.forEach(applicant => {
            // const isUnique = !this.newApplicants.includes(applicant);
            const isUnique = !applicantIds.includes(applicant);

            if (isUnique) {
              applicantIds.push(applicant);
            }
          });

        }
      });
    });

    // Get new applicant user information
    this.http.post<any[]>(environment.applicationURI + '/api/getUsers', applicantIds).subscribe(response => {

      response.forEach(applicant => {
        this.newApplicants[applicant._id] = applicant;
      });

      // With the way the data is structured build out the dates
      // then build out the jobs
      this.setDates(datesWithAvailablePositions);
      this.setJobs(availableJobs);
    });






    console.log(this.event.crew);
  }

  private setDates(availableDates: any[]) {
    let index = 0;
    availableDates.forEach(date => {
      this.dateFormControls.push(
        this.formBuilder.group({
            date: new FormControl(date, [Validators.required]),
            jobForms: new FormArray([])
        })
      );

      this.dateForms[date] = this.dateFormControls.controls[index];
      index++;
    });

    this.availableDates = availableDates;
  }

  private generateJobKey(jobDate: string, oldCrewId: string) {
    return jobDate.concat(oldCrewId);
  }

  private setJobs(availableJobs: any) {


    Object.keys(availableJobs).forEach(date => {
      let index = 0;
      availableJobs[date].forEach(job => {
        this.dateForms[date].controls.jobForms.push(
          this.formBuilder.group({
              selectedApplicantId: new FormControl('', [Validators.required])
          })
        );

        // Link the job form with the available jobs data
        // the key has to be unique
        const jobKey = this.generateJobKey(date, job._id);
        this.linkedJobForms[jobKey] = this.dateForms[date].controls.jobForms.controls[index];
        index++;

      });
    });

    this.availableJobs = availableJobs;
  }

  saveEvent() {

    console.log('event.crew before approvals', this.event.crew);
    console.log(this.event);

    const updatedEvent = cloneDeep(this.event);

    Object.keys(this.availableJobs).forEach(date => {
      this.availableJobs[date].forEach(job => {

        const originalCrewId = job._id;
        const jobKey = this.generateJobKey(date, originalCrewId);

        const approvedApplicantId = this.linkedJobForms[jobKey].controls.selectedApplicantId.value;

        const approvedApplicant = this.newApplicants[approvedApplicantId];

        this.event.crew[date].forEach(function(crewPosition, index) {
            if (crewPosition._id === originalCrewId) {
              this[index]._id = approvedApplicantId;
              this[index].email = approvedApplicant.email;
              this[index].firstName = approvedApplicant.firstName;
              this[index].lastName = approvedApplicant.lastName;
              this[index].isAvailable = false;
              this[index].newApplicants = [];
            }
        }, updatedEvent.crew[date]);
      });
    });

    updatedEvent.hasAvailability = false;
    console.log('event.crew after approvals', updatedEvent.crew);
    console.log(updatedEvent);

    this.http.post(environment.applicationURI + '/api/updateEvent', updatedEvent).subscribe((res: any) => {

      const eventId = res.data._id;
      // create a list of users linked to this event
      // the person who created will always be attached
      const listOfUsers = [];
      if (res.data.createdBy._id) {
        listOfUsers.push(res.data.createdBy._id);
      } else {
        listOfUsers.push(res.data.createdBy);
      }

      const userUpdateBody = {
        listOfUsers: [... listOfUsers],
        dates: {}
      };
      Object.keys(res.data.crew).forEach((crewDate) => {
        res.data.crew[crewDate].forEach((crew) => {
          if (!userUpdateBody.listOfUsers.includes(crew._id)) {
            userUpdateBody.listOfUsers.push(crew._id);
          }

          if (!userUpdateBody.dates[crew._id]) {
            userUpdateBody.dates[crew._id] = [];
          }

          if (!userUpdateBody.dates[crew._id].includes(crewDate)) {
            userUpdateBody.dates[crew._id].push(crewDate);
          }

        });
      });

      this.http.post(environment.applicationURI + '/api/updateUserEvents/' + eventId, userUpdateBody).subscribe(response => {

      });
    });

  }

}
