import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  username!: string;
  email!: string;
  password!: string;

  constructor(
    private router: Router,
    private userAuthService: AuthServiceService
  ) {}

  user = {
    username: this.username,
    email: this.email,
    password: this.password,
  };

  onSubmit() {
    this.userAuthService.userRegister(this.user).subscribe((user) => {
      console.log(user);
    });
  }
}
