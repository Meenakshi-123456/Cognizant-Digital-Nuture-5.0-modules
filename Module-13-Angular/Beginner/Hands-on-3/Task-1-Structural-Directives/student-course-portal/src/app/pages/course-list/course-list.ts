import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

 isLoading = signal(true);

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA201', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Spring Boot', code: 'SPR301', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'React', code: 'REA401', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Database', code: 'DB501', credits: 2, gradeStatus: 'pending' }
  ];

  selectedCourseId?: number;

  ngOnInit(): void {
  console.log('ngOnInit called');

  setTimeout(() => {
    console.log('Loading finished');
   this.isLoading.set(false);
  }, 1500);
}

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  // trackBy improves performance by reusing existing DOM elements
  // instead of recreating every item when the list changes.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

}