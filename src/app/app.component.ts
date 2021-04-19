import { Component, OnInit } from '@angular/core';
import { LoginService } from './Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loginStatus: boolean = false;
  loggerRole!: string;
  constructor(private log: LoginService) {}

  ngOnInit() {
    this.log.logevent.subscribe((val) => (this.loginStatus = val));
    this.loggerRole = this.log.getRole();
  }

  logout() {
    this.log.logout();
  }
}
