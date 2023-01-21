import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { ApiServicesService } from './../../services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  username!: string;
  email!: string;
  constructor(
    private apiService: ApiServicesService,
    private router: Router,
    private authServices: AuthServiceService
  ) {}
  ngOnInit() {
    this.apiService.getProfile().subscribe(
      (response: any) => {
        this.username = response.user.username;
        this.email = response.user.email;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.authServices.userLogout();
            this.router.navigate(['login']);
          }
        }
      }
    );
  }
}
