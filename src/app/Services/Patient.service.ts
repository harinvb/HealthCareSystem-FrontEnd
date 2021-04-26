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
  patientId!: number;
  patient!: Patient;
  constructor(private http: HttpClient, private log: LoginService) {}
  ngOnInit(): void {
    this.getByUserID();
  }

  set Patient(pat: Patient) {
    this.patient = pat;
  }
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

  updatePatient(
    patientId: number,
    name: string,
    gender: string,
    phoneNo: string,
    age: number
  ) {
    if (this.log.userid != null) {
      return this.http
        .put<Patient>('http://localhost:8888/patient/updatepatient', {
          patientId: patientId,
          name: name,
          gender: gender,
          phoneNo: phoneNo,
          age: age,
        })
        .pipe(catchError(this.handleError));
    }
    return;
  }
  registerPatient(name: string, gender: string, phoneNo: string, age: number) {
    if (this.log.userid != null) {
      return this.http
        .post<Patient>(
          'http://localhost:8888/patient/registerpatient/' + this.log.userid,
          {
            name: name,
            gender: gender,
            phoneNo: phoneNo,
            age: age,
          }
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
