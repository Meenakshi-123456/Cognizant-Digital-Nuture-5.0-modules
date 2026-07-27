import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course, CourseService } from '../../services/course';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  courses: Course[] = [];
  errorMessage = '';
  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourses();
  }

  loadCourses() {
  this.courseService.getCourses()
    .subscribe({
      next: data => {
        this.courses = data;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
}

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id)
      .subscribe(() => {
        alert('Course deleted');
        this.loadCourses();
      });
  }

  updateCourse(course: Course) {
    const updatedCourse = {
      ...course,
      name: course.name + ' Updated'
    };

    this.courseService.updateCourse(course.id!, updatedCourse)
      .subscribe(() => {
        alert('Course updated');
        this.loadCourses();
      });
  }
}