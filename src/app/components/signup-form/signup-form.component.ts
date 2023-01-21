import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  username!: string;
  email!: string;
  password!: string;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
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
    if (!this.username || !this.email || !this.password) {
      return;
    }

    const user = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.userAuthService.userRegister(user).subscribe((response: any) => {
      if (response.status) {
        alert('You have registered successfully');
        this.router.navigate(['login']);
      } else {
        alert(response.message);
      }
    });
  }
}
