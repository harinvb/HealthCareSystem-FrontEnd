import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientService } from './Patient.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient, private patientServ: PatientService) {}
}
