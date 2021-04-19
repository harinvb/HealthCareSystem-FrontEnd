import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  constructor(private log: LoginService, private routes: Router) {}

  ngOnInit(): void {
    this.log.logevent.subscribe((val) => (this.status = val));
  }

  login() {
    this.log.login('hari', 'pass');
    this.routes.navigate(['about']);
  }

  logut() {
    this.log.logout();
  }
}
