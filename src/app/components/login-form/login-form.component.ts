import { AuthServiceService } from './../../services/auth-service.service';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  username!: string;
  password!: string;
  usernameFormControl = new FormControl('', [
    Validators.minLength(6),
    Validators.required,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.minLength(8),
    Validators.required,
  ]);

  constructor(
    private router: Router,
    private userAuthService: AuthServiceService
  ) {}

  onSubmit() {
    if (!this.username || !this.password) {
      return;
    }

    const user = {
      username: this.username,
      password: this.password,
    };

    this.userAuthService.userLogin(user).subscribe((response: any) => {
      if (response.status) {
        this.router.navigate(['home']);
      } else {
        console.log(response);
        alert(response.message);
      }
    });
  }
}
