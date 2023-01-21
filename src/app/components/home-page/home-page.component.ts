import { AuthServiceService } from './../../services/auth-service.service';
import { Router } from '@angular/router';
import { ApiServicesService } from './../../services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private apiServices: ApiServicesService,
    private router: Router,
    private authServices: AuthServiceService
  ) {}
  ngOnInit() {
    this.apiServices.getHome().subscribe(
      (response) => {
        console.log(response);
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
  cards: any[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
}
