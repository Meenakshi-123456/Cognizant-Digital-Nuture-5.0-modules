import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {

    return this.http.get<Course[]>(this.apiUrl).pipe(

      // Retry failed HTTP requests 2 times before showing error
      retry(2),

      // tap is used only for side effects like logging.
      // It does not change the data stream. Data transformation should be done using map.
      tap(courses => {
        console.log('Courses loaded:', courses.length);
      }),

      // Transform API response before sending to component
      // Only courses with credits greater than 0 will reach the component
      map(courses =>
        courses.filter(course => course.credits > 0)
      ),

      // Handle HTTP errors
      catchError(err => {
        console.error(err);

        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );
      })

    );
  }
  addCourse(course: Course): Observable<Course> {
  return this.http.post<Course>(this.apiUrl, course);
}
}