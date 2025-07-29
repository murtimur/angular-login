import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../components/input/input.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, InputComponent,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  apiProgress: boolean = false;
  successMessage: any;

  errors: { username: string; password: string } | undefined;

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(!localStorage.getItem('setting')) {
      this.router.navigate(['/setting'])
    }
    const storedData = JSON.parse(localStorage.getItem('auth'));
    if (storedData.id > 0) {
      localStorage.removeItem('auth');
    }
  }

  login(event: Event) {
    this.apiProgress = true;
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.apiProgress = false;
        this.router.navigate(['/home']);
      },
      error: (err) => {
        if (err.status) {
          if (err.status === 400) {
            this.errors = err.error.validationErrors;
          } else {
            this.errorMessage = err.error.message;
          }
        } else {
          this.errorMessage =
            'Bir hata oluştu lütfen daha sonra tekrar deneyiniz.';
        }
      },
    });
    this.apiProgress = false;
  }

  ayarPageRouter() {
    this.router.navigate(['/setting']);
  }
}
