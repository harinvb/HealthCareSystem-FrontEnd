import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiagnosticCenter } from 'src/app/Interfaces/DiagnosticCenter';
import { DiagnosticTest } from 'src/app/Interfaces/DiagnosticTest';
import { AppointmentService } from 'src/app/Services/Appointment.service';

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
  preDCtests!: DiagnosticTest[];

  constructor(
    private appServ: AppointmentService,
    private formBuild: FormBuilder
  ) {
    this.appform = this.formBuild.group({
      appointmentDate: ['', [Validators.required]],
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
  }

  submitAppointment() {
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

  checkDate() {
    this.validDate = this.appform.get('appointmentDate')?.value >= this.today;
  }
}
