import { Component } from '@angular/core';
import { InputComponent } from '../components/input/input.component';
import { FormControl, FormsModule } from '@angular/forms';
import { User } from '../models/user';
import { SignupService } from '../services/signup.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  imports: [
    InputComponent,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  constructor(private signUpService: SignupService) {}

  toppings = new FormControl('');


  user: User = new User();

  className: string = 'form-control';

  errors: { [key: string]: any } = {};
  userCreate() {
    const requestPayload = {
      username: this.user.username,
      password: this.user.password,
    };
    this.signUpService.userCreate(requestPayload).subscribe({
      next: (data) => console.log(data),
      error: (err) => (this.errors = err.error.validationErrors),
    });
  }
}
