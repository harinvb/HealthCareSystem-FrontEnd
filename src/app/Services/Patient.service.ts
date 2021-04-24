import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Patient } from '../Interfaces/patient';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class PatientService implements OnInit {
  patientId: number = 100;
  patient!: Patient;
  constructor(private http: HttpClient, private log: LoginService) {}
  ngOnInit(): void {}

  get Patient() {
    return this.patient;
  }

  getByUserID() {
    if (this.log.userid != null) {
      return this.http
        .get<Patient>(
          'http://localhost:8888/patient/viewpatient/' + this.log.userid
        )
        .pipe(catchError(this.handleError));
    }
    return;
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
