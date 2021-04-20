import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { User } from '../Interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formgrp!: FormGroup;
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
    this.log
      .login(
        this.formgrp.get('username')?.value,
        this.formgrp.get('password')?.value
      )
      .subscribe(
        (data) => {
          this.log.User = data;
          this.log.Status = true;
        },
        (error) => {
          console.log(error);
          this.log.Status = false;
        }
      );
    this.routes.navigate(['home']);
  }

  logout() {
    this.log.logout();
  }
}
