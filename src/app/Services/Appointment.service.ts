import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../Interfaces/Appointment';
import { DiagnosticCenter } from '../Interfaces/DiagnosticCenter';
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
    testId: string[]
  ): Observable<Appointment> {
    let postParams = new HttpParams({
      fromObject: {
        patientID: this.patServ.patientId.toString(),
        diagnosticCenterID: centerID,
        testIds: testId,
      },
    });
    return this.http.post<Appointment>(
      'http://localhost:8888/Appointment/addappointment',
      {
        appointmentDate: appDate,
        approvalStatus: status,
      },
      {
        params: postParams,
      }
    );
  }

  getUpdatableAppointments() {
    return this.http
      .get<Appointment[]>(
        'http://localhost:8888/Appointment/getWithNoTestResults'
      )
      .pipe(catchError(this.handleError));
  }

  verifyAppointment(app: Appointment) {
    return this.http
      .put<Appointment>('http://localhost:8888/Appointment/verify', app)
      .pipe(catchError(this.handleError));
  }

  rejectAppointment(app: Appointment) {
    return this.http
      .put<Appointment>('http://localhost:8888/Appointment/reject',  app)
      .pipe(catchError(this.handleError));
  }
  getVerifiableAppointments() {
    return this.http
      .get<Appointment[]>('http://localhost:8888/Appointment/getVerifiable')
      .pipe(catchError(this.handleError));
  }

  getAppointments(patientId: number): Observable<Appointment[]> {
    return this.http
      .get<Appointment[]>(
        'http://localhost:8888/Appointment/viewappointments/' + patientId
      )
      .pipe(catchError(this.handleError));
  }

  getAllCenters(): Observable<DiagnosticCenter[]> {
    return this.http
      .get<DiagnosticCenter[]>(
        'http://localhost:8888/DiagnosticCenter/getDiagnosticCenters'
      )
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      return throwError('Unable to Connect to the Server Please Try Again');
    }
    return throwError(error.message);
  }
}
