import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-userlist',
  imports: [ CommonModule, RouterModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent {

  user: User = JSON.parse(localStorage.getItem('auth'));

  constructor(private userService: UserService){}

  ngOnInit() {
    this.getAllUsers();
  }

  userList: any[] = [];

  apiProgress: boolean = true;

  getAllUsers() {
    this.apiProgress = true;
    this.userService.getAllUsers().subscribe({
      next: data => {
        this.userList = data;
        this.apiProgress = false;
      },
      error: err => {
        console.log(err);
        this.apiProgress = false;
      }
    })
  }

  userDelete(id: number) {
    this.userService.userDelete(id).subscribe({
      next: data => {
        console.log(data);
        this.getAllUsers();
      },
      error: err=> console.log(err)
    })
  }

}
