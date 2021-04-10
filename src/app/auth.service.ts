import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { User } from './User';
import { RegisterUser } from './RegisterUser';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  getToken(): string {
    return localStorage.getItem('access_token');
  }

  readToken(): User {
    const token = this.getToken();
    return helper.decodeToken(token);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) return true;
    return false;
  }

  login(user: User): Observable<any> {
    const url = `${environment.userAPIBase}/login`;
    return this.http.post<any>(url, user);
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  register(registerUser: RegisterUser): Observable<any> {
    const url = `${environment.userAPIBase}/register`;
    return this.http.post<any>(url, registerUser);
  }
}
