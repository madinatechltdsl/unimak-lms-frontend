import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {CustomHttpResponse} from "../models/CustomHttpResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private host = environment.api.url;

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[] | HttpErrorResponse>{
    return this.http.get<User[]>(this.host+'user/list');
  }
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.host+'user/add', user);
  }
  updateUser(user: User): Observable<User>{
    return this.http.post<User>(this.host+'user/update', user);
  }
  resetPassword(email: string): Observable<CustomHttpResponse | HttpErrorResponse>{
    return this.http.get<CustomHttpResponse>(this.host+'user/resetpassword/'+email);
  }
  updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse>{
    return this.http.post<User>(this.host+'user/updateProfileImage', formData,
      {reportProgress: true, observe: 'events'});
  }
  deleteUser(id: number): Observable<CustomHttpResponse | HttpErrorResponse>{
    return this.http.delete<CustomHttpResponse>(this.host+'user/delete/'+id);
  }
  addUsersToLocalCache(users: User[]): void{
    localStorage.setItem('users', JSON.stringify(users));
  }
  getUsersFromLocalCache(): User[]{
    if(localStorage.getItem('users')){
      return JSON.parse(<string>localStorage.getItem('users'));
    }
    return [];
  }
  createUserFormData(loggedInUsername: string, user: User, profileImage: File): FormData{
    const formData = new FormData();
    formData.append('currentUsername', loggedInUsername);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('role', user.role);
    formData.append('isActive', JSON.stringify(user.isActive));
    formData.append('isNotLocked', JSON.stringify(user.isNotLocked));
    if(profileImage != null){
      formData.append('profileImage', profileImage);
    }
    return formData;
  }
}
