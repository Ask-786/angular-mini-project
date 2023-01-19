import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:2001';

  userRegister(user: User) {
    const url = `${this.apiUrl}/signup`;
    return this.http.post(url, user, httpOptions);
  }
}
