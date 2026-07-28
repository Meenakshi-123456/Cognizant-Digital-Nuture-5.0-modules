import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/course';

export const loadCourses = createAction(
  '[Course] Load Courses'
);

export const loadCoursesSuccess = createAction(
  '[Course] Load Courses Success',
  props<{ courses: Course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Course] Load Courses Failure',
  props<{ error: string }>()
);

export const enrollInCourse = createAction(
  '[Course] Enroll In Course',
  props<{ courseId: string }>()
);

export const unenrollFromCourse = createAction(
  '[Course] Unenroll From Course',
  props<{ courseId: string }>()
);