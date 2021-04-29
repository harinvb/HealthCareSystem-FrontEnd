import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Interfaces/user';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css'],
})
export class UserComponent implements OnInit {
  users!: User[];
  presentUser!: User;
  updateReq = false;
  constructor(
    private userServ: UserService,
    private logServ: LoginService,
    private routes: Router
  ) {}

  ngOnInit() {
    let users = this.getAllUsers();
    if (this.logServ.Role == 'user') {
      this.updateReq = true;
    }
  }

  getAllUsers() {
    return this.userServ.getAll().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteUser(id: number) {
    this.userServ.deleteUser(id).subscribe(
      (data) => {
        this.getAllUsers();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  update(index: number) {
    this.updateReq = true;
    this.presentUser = this.users[index];
  }

  childEvent(event: any) {
    if (this.logServ.Role == 'user') this.routes.navigateByUrl('login');
    else this.updateReq = false;
    this.getAllUsers();
  }
}
