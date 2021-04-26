import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Event, Router, RouterLink } from '@angular/router';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginStatus: boolean = false;
  loggerRole: string = 'user';

  constructor(public log: LoginService, private routes: Router) {}

  ngOnInit() {
    this.getLog();
  }

  logout() {
    alert('You are About to be Logged Out');
    this.log.logout();
  }

  getLog() {
    return this.log.logEvent.subscribe((u) => {
      this.loginStatus = u.loggedIn;
      this.loggerRole = u.role;
      if (this.loggerRole == 'ADMIN') this.routes.navigateByUrl('appointment');
    });
  }
  appointment() {
    if (this.loginStatus) {
      this.routes.navigateByUrl('appointment/createappointment');
    } else {
      this.routes.navigateByUrl('login');
    }
  }
}
