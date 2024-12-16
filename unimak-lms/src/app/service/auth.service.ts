import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host = environment.api.url;
  private token: string | null | undefined;
  private loggedInUsername: string | null | undefined;
  private jwtHelper: any = new JwtHelperService();

  constructor(private http: HttpClient) { }

  login(user: User):  Observable<HttpResponse<any> | HttpErrorResponse>{
    return this.http.post<HttpResponse<any> | HttpErrorResponse>
    (this.host+'user/login', user, {observe: 'response'});
  }

  register(user: User): Observable<User | HttpErrorResponse>{
    return this.http.post<User | HttpErrorResponse>
    (this.host+'user/register', user);
  }

  logOut(): void{
    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('users');
  }
  saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  addUserToLocalCache(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalCache(): User {
    const user = localStorage.getItem('user');
    return JSON.parse(<string>user);
  }

  loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  getToken(): string | null | undefined {
    return this.token;
  }

  isUserLoggedIn() : boolean {
    this.loadToken();
    if (this.token && this.token !== '' && this.token !== undefined) {
      const decodedToken = this.jwtHelper.decodeToken(this.token);

      if (decodedToken && decodedToken.sub && !this.jwtHelper.isTokenExpired(this.token)) {
        this.loggedInUsername = decodedToken.sub;
        return true;
      }
    }
    this.logOut();
    return false;
  }
}
