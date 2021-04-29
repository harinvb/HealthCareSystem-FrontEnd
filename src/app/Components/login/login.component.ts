import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { User } from '../../Interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formgrp!: FormGroup;
  errormsg: string = '';
  constructor(
    private log: LoginService,
    private routes: Router,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formgrp = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    let username = this.formgrp.get('username')?.value;
    let pass = this.formgrp.get('password')?.value;
    if (username != null || username != '') {
      this.log.login(username, pass)?.subscribe(
        (data) => {
          this.log.User = data;
          this.log.Status = true;
          if (this.log.Role == 'user') {
            this.routes.navigate(['appointment/viewappointment']);
          } else {
            this.routes.navigate(['appointment/verifyappointment']);
          }
        },
        (error) => {
          this.errormsg = error;
          this.log.Status = false;
        }
      );
    }
  }

  logout() {
    this.log.logout();
  }
}
