import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private apiUrl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {}

  getStudentsByCourse(courseId: string | number): Observable<Student[]> {

    console.log('Requesting students for:', courseId);

    return this.http.get<Student[]>(
      `${this.apiUrl}?courseId=${courseId}`
    );
  }
}