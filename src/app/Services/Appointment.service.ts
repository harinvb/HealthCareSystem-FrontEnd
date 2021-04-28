import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { Appointment } from '../Interfaces/Appointment';
import { DiagnosticCenter } from '../Interfaces/DiagnosticCenter';
import { Patient } from '../Interfaces/patient';
import { TestResult } from '../Interfaces/TestResult';
import { PatientService } from './Patient.service';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient, private patServ: PatientService) {}

  addAppointment(
    appDate: Date,
    status: string,
    centerID: string,
    testId: string[],
    patientid: number
  ): Observable<Appointment> {
    let postParams = new HttpParams({
      fromObject: {
        patientID: patientid.toString(),
        diagnosticCenterID: centerID,
        testIds: testId,
      },
    });
    return this.http
      .post<Appointment>(
        'http://localhost:8888/Appointment/addappointment',
        {
          appointmentDate: appDate,
          approvalStatus: status,
        },
        {
          params: postParams,
        }
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  getAllAppointments() {
    return this.http
      .get<Appointment[]>('http://localhost:8888/Appointment/getAll')
      .pipe(catchError(this.handleError), shareReplay());
  }

  getUpdatableAppointments() {
    return this.http
      .get<Appointment[]>(
        'http://localhost:8888/Appointment/getWithNoTestResults'
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  addTestResult(appointmentId: number, testResId: number) {
    return this.http
      .put<TestResult>(
        'http://localhost:8888/Appointment/addTestRes/' +
          appointmentId +
          '/' +
          testResId,
        null
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  verifyAppointment(app: Appointment) {
    return this.http
      .put<Appointment>('http://localhost:8888/Appointment/verify', app)
      .pipe(catchError(this.handleError), shareReplay());
  }

  rejectAppointment(app: Appointment) {
    return this.http
      .put<Appointment>('http://localhost:8888/Appointment/reject', app)
      .pipe(catchError(this.handleError), shareReplay());
  }
  getVerifiableAppointments() {
    return this.http
      .get<Appointment[]>('http://localhost:8888/Appointment/getVerifiable')
      .pipe(catchError(this.handleError), shareReplay());
  }

  getAppointments(patientId: number): Observable<Appointment[]> {
    return this.http
      .get<Appointment[]>(
        'http://localhost:8888/Appointment/viewappointments/' + patientId
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  getAllCenters(): Observable<DiagnosticCenter[]> {
    return this.http
      .get<DiagnosticCenter[]>(
        'http://localhost:8888/DiagnosticCenter/getDiagnosticCenters'
      )
      .pipe(catchError(this.handleError), shareReplay());
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError('Unable to Connect to the Server Please Try Again');
    }
    return throwError(error.message);
  }
}
