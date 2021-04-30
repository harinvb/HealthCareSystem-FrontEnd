import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/Interfaces/Appointment';
import { DiagnosticCenter } from 'src/app/Interfaces/DiagnosticCenter';
import { AppointmentService } from 'src/app/Services/Appointment.service';
import { LoginService } from 'src/app/Services/login.service';
import { PatientService } from 'src/app/Services/Patient.service';
import { AppointmentStatus } from '../../Interfaces/AppointmentStatus.enum';

@Component({
  selector: 'app-Appointment',
  templateUrl: './Appointment.component.html',
  styleUrls: ['./Appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
