import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent implements OnInit {
  userForm!: FormGroup;
  constructor(
    private formBuild: FormBuilder,
    private userServ: UserService,
    private logServ: LoginService
  ) {}

  ngOnInit() {
    this.userForm = this.formBuild.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: [this.Role, Validators.required],
    });
  }
  get Role() {
    return this.logServ.Role;
  }

  submit() {
    //call service
    if (this.Role == 'ADMIN') {
      console.log(this.userForm.value, 'ADMIN');
    } else {
      console.log(this.userForm.value, 'user');
    }
  }
}
