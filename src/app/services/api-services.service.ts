import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:2001';

  getHome() {
    return this.http.get(this.baseUrl);
  }

  getProfile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }
}
