import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TestResult } from '../Interfaces/TestResult';

@Injectable({
  providedIn: 'root',
})
export class TestResultService {
  private url = 'http://localhost:8888';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getTestResultById(id: number) {
    return this.httpClient
      .get<TestResult>(this.url + '/testresult/resultbyid/' + id.toString())
      .pipe(catchError(this.handleError));
  }

  constructor(private httpClient: HttpClient) {}

  addTestResult(testres: TestResult): Observable<TestResult> {
    return this.httpClient
      .post<TestResult>(
        this.url + '/testresult/addresult',
        JSON.stringify(testres),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  updateTestResult(testres: TestResult): Observable<TestResult> {
    return this.httpClient
      .put<TestResult>(
        this.url + '/testresult/updateresult',
        JSON.stringify(testres),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }
  getAllTestResult(): Observable<TestResult[]> {
    return this.httpClient
      .get<TestResult[]>(this.url + '/testresult/getAllTestResults')
      .pipe(catchError(this.handleError));
  }

  deleteTestResult(testResultid: number): Observable<TestResult[]> {
    return this.httpClient
      .delete<TestResult[]>(
        this.url + '/testresult/removeresult/' + testResultid
      )
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
