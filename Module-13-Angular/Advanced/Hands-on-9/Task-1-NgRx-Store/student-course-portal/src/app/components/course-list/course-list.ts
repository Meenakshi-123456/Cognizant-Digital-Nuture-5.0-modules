import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course';
import { Student } from '../../models/student';

import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses$: Observable<Course[]>;
  students: Student[] = [];
  errorMessage = '';

  constructor(
    private store: Store,
    private enrollmentService: EnrollmentService
  ) {
    this.courses$ = this.store.select(selectAllCourses);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  loadStudents(courseId: string | number): void {

    console.log('Course ID:', courseId);

    this.enrollmentService.getStudentsByCourse(courseId)
      .subscribe({

        next: (data) => {
          console.log('Students loaded:', data);
          this.students = data;
        },

        error: (err) => {
          console.error('Error loading students:', err);
        }

      });
  }

  updateCourse(course: Course): void {
    console.log(course);
  }

  deleteCourse(id: number): void {
    console.log('Delete Course:', id);
  }

}