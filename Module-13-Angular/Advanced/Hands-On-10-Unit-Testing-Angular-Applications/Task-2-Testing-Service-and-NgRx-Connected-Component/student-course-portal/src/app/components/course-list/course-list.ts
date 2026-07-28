import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';

import { Course } from '../../models/course';

import {
  loadCourses
} from '../../store/course/course.actions';

import {
  selectAllCourses,
  selectLoading
} from '../../store/course/course.selectors';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledCourses
} from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  courses$!: Observable<Course[]>;
  enrolledIds$!: Observable<string[]>;
  loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {

    this.courses$ = this.store.select(selectAllCourses);

    this.loading$ = this.store.select(selectLoading);

    this.enrolledIds$ = this.store.select(selectEnrolledCourses);

    this.store.dispatch(loadCourses());

  }

  toggleEnrollment(courseId: string): void {

    this.enrolledIds$
      .pipe(take(1))
      .subscribe(ids => {

        if (ids.includes(courseId)) {

          this.store.dispatch(
            unenrollFromCourse({ courseId })
          );

        } else {

          this.store.dispatch(
            enrollInCourse({ courseId })
          );

        }

      });

  }

}