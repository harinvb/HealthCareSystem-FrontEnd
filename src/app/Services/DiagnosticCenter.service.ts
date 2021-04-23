import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DiagnosticCenter } from '../Interfaces/DiagnosticCenter';

@Injectable({
  providedIn: 'root',
})
export class CenterService {
  private url = 'http://localhost:7576/DiagnosticCenter/';
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getAllDiagnosticCenters(): Observable<DiagnosticCenter[]> {
    return this.httpClient
      .get<DiagnosticCenter[]>(this.url + 'getDiagnosticCenters')
      .pipe(catchError(this.handleError));
  }

  addDiagnosticCenter(dCenter: any): Observable<any> {
    return this.httpClient
      .post<DiagnosticCenter>(
        this.url + 'addCenter',
        JSON.stringify(dCenter),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  deleteCenter(id: number): Observable<any> {
    return this.httpClient
      .delete<DiagnosticCenter>(this.url + 'removeDiagnosticCenter/' + id)
      .pipe(catchError(this.handleError));
  }

  updateCenter(dCenter: any): Observable<any> {
    return this.httpClient
      .put<DiagnosticCenter>(
        this.url + 'updateDiagnosticCenter',
        JSON.stringify(dCenter),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getCenterById(id: number): Observable<DiagnosticCenter> {
    return this.httpClient
      .get<DiagnosticCenter>(this.url + 'getDiagnosticCenter/' + id)
      .pipe(catchError(this.handleError));
  }

  getAppointments(name: string): Observable<DiagnosticCenter[]> {
    return this.httpClient
      .get<DiagnosticCenter[]>(this.url + 'appointments/' + name)
      .pipe(catchError(this.handleError));
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
