import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/Services/Patient.service';

@Component({
  selector: 'app-Patient',
  templateUrl: './Patient.component.html',
  styleUrls: ['./Patient.component.css'],
})
export class PatientComponent implements OnInit {
  constructor(private patientServ: PatientService) {}

  ngOnInit() {}
}
