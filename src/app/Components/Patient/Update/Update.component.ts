import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Interfaces/patient';
import { PatientService } from 'src/app/Services/Patient.service';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css'],
})
export class UpdatePatientComponent implements OnInit {
  @Input('patient') patient!: Patient;
  newPatient = false;
  patientForm!: FormGroup;
  @Output('updatedEvent')
  updatedEvent: EventEmitter<Patient> = new EventEmitter();
  constructor(
    private formBuild: FormBuilder,
    private patServ: PatientService,
    private routes: Router
  ) {
    this.patientForm = this.formBuild.group({
      name: ['', Validators.required],
      gender: [null, Validators.required],
      phoneNo: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  ngOnInit() {
    if (this.patient != null) {
      this.patientForm.setValue({
        name: this.patient.name,
        gender: this.patient.gender,
        phoneNo: this.patient.phoneNo,
        age: this.patient.age,
      });
    } else {
      this.newPatient = true;
    }
  }

  saveDetails() {
    if (!this.newPatient) {
      this.patServ
        .updatePatient(
          this.patient.patientId,
          this.patientForm.get('name')?.value,
          this.patientForm.get('gender')?.value,
          this.patientForm.get('phoneNo')?.value,
          this.patientForm.get('age')?.value
        )
        ?.subscribe(
          (data) => {
            this.updatedEvent.emit(data);
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.patServ
        .registerPatient(
          this.patientForm.get('name')?.value,
          this.patientForm.get('gender')?.value,
          this.patientForm.get('phoneNo')?.value,
          this.patientForm.get('age')?.value
        )
        ?.subscribe(
          (data) => {
            this.updatedEvent.emit(data);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
