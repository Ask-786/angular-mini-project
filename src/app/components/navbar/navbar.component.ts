import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  hasNotRoute(root: string, login: string, signup: string): boolean {
    return (
      this.router.url !== root &&
      this.router.url !== login &&
      this.router.url !== signup
    );
  }

  onLogout() {
    if (confirm('are you sure')) {
      this.authService.userLogout();
      this.router.navigate(['']);
    }
  }
}
