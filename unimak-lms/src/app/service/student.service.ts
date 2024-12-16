import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private host = environment.api.url;

  constructor(private http:HttpClient) { }

  getAllStudents(): Observable<Student[] | HttpErrorResponse>{
    return this.http.get<Student[]>(this.host+'api/students/all');
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.host}/${id}`);
  }
}
