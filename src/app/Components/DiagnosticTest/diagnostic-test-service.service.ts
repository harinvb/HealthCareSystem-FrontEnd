import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DiagnosticTest } from './DiagnosticTest';
import { catchError } from 'rxjs/operators'
import { AllTestComponent } from './all-test/all-test.component';
//import * as $ from "jquery"

@Injectable({
  providedIn: 'root'
})
export class DiagnosticTestServiceService {
  private url = "http://localhost:8888";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getTestById(diagonasticTestid: number): Observable<DiagnosticTest> {
    return this.httpClient.get<DiagnosticTest>(this.url + '/DiagnosticTest/getDiagnosticTest/' + diagonasticTestid).pipe(catchError(this.handleError))
  };

  getAllTest(): Observable<DiagnosticTest[]> {
    return this.httpClient.get<DiagnosticTest[]>(this.url + '/DiagnosticTest/getAllTests/').
      pipe(
        catchError(this.handleError)
      );
  }
  addTest(dtest:any): Observable<any> {
    return this.httpClient.post<DiagnosticTest>(this.url + '/DiagnosticTest/addNewTest/', JSON.stringify(dtest), this.httpOptions)
      .pipe(catchError(this.handleError)
      )
  }
  updateTest(dtest: any): Observable<any> {
    return this.httpClient.put<DiagnosticTest>(this.url + '/DiagnosticTest/updateTestDetail/', JSON.stringify(dtest), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }
  deleteTest(dtest: any): Observable<any> {
   return this.httpClient.delete<DiagnosticTest>(this.url + '/Test/removetest/'+ dtest).
     pipe(
      catchError(this.handleError)
    );
  }
  getTestsofDiagnosticCenter(centerId: number): Observable<any> {
    return this.httpClient.get<DiagnosticTest>(this.url +'/getTestofDiagnosticCenter/'+ centerId).pipe(catchError(this.handleError));
  }


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

