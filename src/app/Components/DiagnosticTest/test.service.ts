import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DiagnosticTest } from './DiagnosticTest';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private url = "http://localhost:7576/DiagnosticTest";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  getAllTest(): Observable<DiagnosticTest[]> {
    return this.httpClient.get<DiagnosticTest[]>(this.url + '/getAllTests/').
      pipe(
        catchError(this.handleError)
      );
  }
  getTestById(id: number): Observable<DiagnosticTest> {
    return this.httpClient.get<DiagnosticTest>(this.url + '/getDiagnosticTest/' + id).pipe(catchError(this.handleError))
  };

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log("Client Side Error =" + eResponse.error.message);
      console.log("Status Code=" + eResponse.status);
    }
    else {
      console.log("Server Side Error =" + eResponse.error.message);
      console.log("Status Code=" + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
