import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DiagnosticCenter } from 'src/app/Interfaces/DiagnosticCenter';
import { DiagnosticTest } from 'src/app/Interfaces/DiagnosticTest';
import { AppointmentService } from 'src/app/Services/Appointment.service';
import { PatientService } from 'src/app/Services/Patient.service';

@Component({
  selector: 'app-CreateAppointment',
  templateUrl: './CreateAppointment.component.html',
  styleUrls: ['./CreateAppointment.component.css'],
})
export class CreateAppointmentComponent implements OnInit {
  today = new Date();
  appform!: FormGroup;
  dignosticCenters!: DiagnosticCenter[];
  hasTests = false;
  success = false;
  errormsg = '';
  validDate = true;
  hasProfile = true;
  preDCtests!: DiagnosticTest[];

  constructor(
    private appServ: AppointmentService,
    private formBuild: FormBuilder,
    private patServ: PatientService,

    private routes: Router
  ) {
    this.appform = this.formBuild.group({
      appointmentDate: [null, [Validators.required, this.date()]],
      diagnosticTests: ['', Validators.required],
      diagnosticCenter: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.appServ.getAllCenters().subscribe(
      (data) => {
        this.dignosticCenters = data;
      },
      (error) => {
        this.errormsg = error;
      }
    );
    this.patServ.getByUserID().subscribe(
      (data) => {
        this.hasProfile = true;
        if (data == null) this.hasProfile = false;
      },
      (error) => {
        this.hasProfile = false;
      }
    );
  }

  get AppDate() {
    return this.appform.get('appointmentDate');
  }

  submitAppointment() {
    if (this.hasProfile) {
      this.appServ
        .addAppointment(
          this.appform.get('appointmentDate')?.value,
          'statusnotapproved',
          this.appform.get('diagnosticCenter')?.value,
          this.appform.get('diagnosticTests')?.value
        )
        .subscribe(
          (data) => {
            this.success = true;
          },
          (error) => {
            this.errormsg = error;
          }
        );
    } else {
      this.routes.navigateByUrl('patient');
    }
  }

  selected() {
    let selId = this.appform.get('diagnosticCenter')?.value;
    let DC = this.dignosticCenters.find(
      (dc) => dc.diagonasticCenterid == selId
    );
    if (DC?.tests != null) {
      if (DC.tests.length > 0) this.hasTests = true;
      else this.hasTests = false;
    } else this.hasTests = false;
    this.preDCtests = DC?.tests!;
  }

  date(): ValidatorFn {
    return (control: AbstractControl) =>
      new Date(control.value) >= this.today
        ? null
        : {
            wrongDate:
              'Please Pick A Date from This Day On ' + this.today.toString(),
          };
  }
}
