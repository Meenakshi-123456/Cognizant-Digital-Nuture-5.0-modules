import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

export interface Course {
  id?: number;
  name: string;
  duration: string;
  fee: number;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(this.apiUrl)
    .pipe(
      tap(courses => console.log('Courses loaded:', courses)),
      catchError(error => {
        console.error('Error loading courses:', error);
        return throwError(() => error);
      })
    );
}

  addCourse(course: Course): Observable<Course> {
  return this.http.post<Course>(this.apiUrl, course)
    .pipe(
      tap(data => console.log('Course added:', data)),
      catchError(error => {
        console.error('Add failed:', error);
        return throwError(() => error);
      })
    );
}
  updateCourse(id: number, course: Course): Observable<Course> {
  return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
}

deleteCourse(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}