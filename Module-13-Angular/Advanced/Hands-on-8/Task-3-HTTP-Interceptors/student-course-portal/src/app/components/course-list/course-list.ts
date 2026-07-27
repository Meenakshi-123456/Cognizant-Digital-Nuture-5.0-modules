import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment';

import { Course } from '../../models/course';
import { Student } from '../../models/student';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  courses: Course[] = [];
  students: Student[] = [];
  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }


  loadCourses(): void {

    this.courseService.getCourses()
      .subscribe({

        next: (data) => {
          this.courses = data;
        },

        error: (err) => {
          this.errorMessage = err.message;
        }

      });

  }


  loadStudents(courseId: string | number): void {

  console.log('Course ID:', courseId);

  this.enrollmentService
    .getStudentsByCourse(courseId)
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
    this.courses = this.courses.filter(
      course => course.id !== id
    );
  }

}