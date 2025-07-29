import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  user: User = JSON.parse(localStorage.getItem('auth'));

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        this.router.navigate(['/']);
      },
      error: (err) => console.log(err),
    });
  }

  userSignUpRouter() {
    if (this.user.username === 'admin') {
      this.router.navigate(['/signup']);
    }
  }

  userListRouter() {
    if (this.user.username === 'admin') {
      this.router.navigate(['/userlist']);
    }
  }

}
