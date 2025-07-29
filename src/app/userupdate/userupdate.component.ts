import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { InputComponent } from "../components/input/input.component";
import { CommonModule } from '@angular/common';
import { SignupService } from '../services/signup.service';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-userupdate',
  imports: [FormsModule, InputComponent, CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './userupdate.component.html',
  styleUrl: './userupdate.component.scss'
})
export class UserupdateComponent {

  username: string | null = null;

  errors: { [key: string]: any } = {};

  user: User = new User();

  className: string = 'form-control';


  constructor(private route: ActivatedRoute, private userService: UserService,
    private signUpService: SignupService, private pageRouter: Router){}

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.username).subscribe({
      next: data => {
        this.user = data;
      },
      error: err => console.log(err)
    })
  }


  userUpdate() {
    const requestPayload = {
      username: this.user.username,
      password: this.user.password,
    };
    console.log(requestPayload)
    this.userService.userUpdate(requestPayload).subscribe({
      next: data => {
        console.log(data);
        this.pageRouter.navigate(['/userlist'])
      },
      error: err => console.log(err)
    })
  }

}
