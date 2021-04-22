import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  patientId: number = 100;
  constructor(private http: HttpClient, private log: LoginService) {}
}
