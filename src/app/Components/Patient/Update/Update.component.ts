import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patient } from 'src/app/Interfaces/patient';
import { PatientService } from 'src/app/Services/Patient.service';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css'],
})
export class UpdateComponent implements OnInit {
  @Input('patient') patient!: Patient;
  patientForm!: FormGroup;
  constructor(private formBuild: FormBuilder) {
    this.patientForm = this.formBuild.group({
      Name: ['', Validators.required],
      Gender: ['', Validators.required],
      PhoneNo: ['', Validators.required],
      Age: ['', Validators.required],
    });
  }
  ngOnInit() {
    if (this.patient != null) {
      this.patientForm.setValue({
        Name: this.patient.name,
        Gender: this.patient.gender,
        PhoneNo: this.patient.phoneNo,
        Age: this.patient.age,
      });
    }
  }

  saveDetails() {
    console.log(
      ((this.patientForm.value as Patient).patientId = this.patient.patientId)
    );
  }
}
