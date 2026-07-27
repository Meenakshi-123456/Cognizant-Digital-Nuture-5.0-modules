import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

export const selectCourseState =
  createFeatureSelector<CourseState>('course');

export const selectAllCourses =
  createSelector(
    selectCourseState,
    (state) => state.courses
  );

export const selectEnrolledIds =
  createSelector(
    selectCourseState,
    (state) => state.enrolledIds
  );