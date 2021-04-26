import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User = new User();
  @Output('logEvent') logEvent: EventEmitter<User> = new EventEmitter();
  constructor(private http: HttpClient, private routes: Router) {}

  login(username: string, password: string) {
    if (username != null) {
      return this.http
        .post<User>('http://localhost:8888/Login', {
          username: username,
          password: password,
        })
        .pipe(catchError(this.handleError));
    }
    return;
  }

  logout(): void {
    this.http
      .post<User>('http://localhost:8888/Logout', this.user)
      .pipe(catchError(this.handleError))
      .subscribe(
        (data) => {
          this.User = data;
          this.user.role = 'user';
          this.Status = false;
          this.routes.navigateByUrl('home');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.status == 0) {
      return throwError(
        'Server Side Error Will Get Back To You as Early As Possible'
      );
    }
    return throwError(eResponse.error.message);
  }
  emit() {
    this.logEvent.emit(this.user);
  }
  get Role() {
    return this.user.role;
  }

  set User(user: User) {
    this.user = user;
  }
  set Status(status: boolean) {
    this.user.loggedIn = status;
    this.emit();
  }
  get Status() {
    return this.user.loggedIn;
  }

  get userid() {
    return this.user.userid;
  }
}
