import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  status: boolean = false;
  role: string = 'admin';
  @Output('logevent') logevent: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  login(username: string, password: string) {
    if (!this.status) {
      this.status = true;
      this.logevent.emit(this.status);
    }
  }

  logout() {
    if (this.status) {
      this.status = false;
      this.logevent.emit(this.status);
    }
  }

  getRole() {
    return this.role;
  }
}
