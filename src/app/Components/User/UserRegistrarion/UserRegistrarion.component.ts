import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-UserRegistrarion',
  templateUrl: './UserRegistrarion.component.html',
  styleUrls: ['./UserRegistrarion.component.css'],
})
export class UserRegistrarionComponent implements OnInit {
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
