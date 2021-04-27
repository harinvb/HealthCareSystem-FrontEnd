import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from 'src/app/Interfaces/patient';
import { PatientService } from 'src/app/Services/Patient.service';

@Component({
  selector: 'app-Patient',
  templateUrl: './Patient.component.html',
  styleUrls: ['./Patient.component.css'],
})
export class PatientComponent implements OnInit {
  @Output('patient') patient!: Patient;
  update = false;
  constructor(private patServ: PatientService) {}
  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.patServ.getByUserID()?.subscribe(
      (data) => {
        this.patient = data;
        if (this.patient == null) this.update = true;
        else {
          this.patServ.Patient = this.patient;
          this.patServ.patientId = this.patient.patientId;
        }
      },
      (error) => console.log(error)
    );
  }

  updateDetails() {
    this.update = !this.update;
  }

  childUpdate(data: any) {
    this.patient = data;
    this.update = true;
  }
}
