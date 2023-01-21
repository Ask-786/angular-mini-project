import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/models/User';
import { LoginUser } from 'src/models/LoginUser';
import { BehaviorSubject, Observable, tap } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private _isNotLoggedIn$ = new BehaviorSubject<boolean>(true);
  private readonly TOKEN_NAME = 'token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  isNotLoggedIn$ = this._isNotLoggedIn$.asObservable();

  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this._isNotLoggedIn$.next(!this.token);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  private baseUrl = 'http://localhost:2001';

  userRegister(user: User) {
    const url = `${this.baseUrl}/auth/signup`;
    return this.http.post(url, user, httpOptions);
  }

  userLogin(user: LoginUser) {
    const url = `${this.baseUrl}/auth/login`;
    return this.http.post(url, user, httpOptions).pipe(
      tap((response: any) => {
        if (response.status) {
          localStorage.setItem(this.TOKEN_NAME, response.token);
          this._isLoggedIn$.next(true);
        }
      })
    );
  }

  userLogout() {
    return localStorage.removeItem(this.TOKEN_NAME);
  }
}
