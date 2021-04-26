import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-UserRegistrarion',
  templateUrl: './UserRegistrarion.component.html',
  styleUrls: ['./UserRegistrarion.component.css'],
})
export class UserRegistrarionComponent implements OnInit {
  @Input('user') user!: User;
  userForm!: FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private userServ: UserService,
    private logServ: LoginService,
    private routes: Router
  ) {}

  ngOnInit() {
    this.userForm = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [this.Role, Validators.required],
    });
    if (this.user != null) {
      this.userForm.setValue({
        username: this.user.username,
        password: this.user.password,
        role: this.user.role,
      });
    }
  }
  get Role() {
    return this.logServ.Role;
  }

  submit() {
    if (this.user == null) {
      //update
      if (this.Role == 'ADMIN' && this.userForm.get('role')?.value == 'ADMIN') {
        //reg admin call
        let userU = new User();
        userU.username = this.userForm.get('username')?.value;
        userU.password = this.userForm.get('password')?.value;
        userU.role = this.userForm.get('role')?.value;
        this.userServ.registerAdmin(userU).subscribe(
          (data) => {
            this.routes.navigateByUrl('/user');
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        let userU = new User();
        userU.username = this.userForm.get('username')?.value;
        userU.password = this.userForm.get('password')?.value;
        userU.role = this.userForm.get('role')?.value;
        this.userServ.registerUser(userU).subscribe(
          (data) => {
            this.routes.navigateByUrl('/user');
          },
          (error) => {
            console.log(error);
          }
        );
      }
    } else {
    }
  }
}
