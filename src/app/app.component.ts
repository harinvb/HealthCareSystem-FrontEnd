import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Event, Router, RouterLink } from '@angular/router';
import { User } from './Components/Interfaces/user';
import { LoginComponent } from './Components/login/login.component';
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
    this.log.logEvent.subscribe((u) => {
      this.loginStatus = u.loggedIn;
      this.loggerRole = u.role;
      if (this.loggerRole == 'ADMIN') this.routes.navigateByUrl('appointments');
    });
  }

  logout() {
    alert('You are About to be Logged Out');
    this.log.logout();
  }
}
