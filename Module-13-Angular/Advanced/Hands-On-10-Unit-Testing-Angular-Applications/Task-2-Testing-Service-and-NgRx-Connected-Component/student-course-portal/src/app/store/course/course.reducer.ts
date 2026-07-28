import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course';

import {
  loadCourses,
  loadCoursesSuccess,
  loadCoursesFailure,
  enrollInCourse,
  unenrollFromCourse
} from './course.actions';

export interface CourseState {

  courses: Course[];

  loading: boolean;

  error: string | null;

  enrolledIds: string[];

}

export const initialState: CourseState = {

  courses: [],

  loading: false,

  error: null,

  enrolledIds: []

};

export const courseReducer = createReducer(

  initialState,

  on(loadCourses, (state) => ({

    ...state,

    loading: true,

    error: null

  })),

  on(loadCoursesSuccess, (state, { courses }) => ({

    ...state,

    courses,

    loading: false,

    error: null

  })),

  on(loadCoursesFailure, (state, { error }) => ({

    ...state,

    loading: false,

    error

  })),

  on(enrollInCourse, (state, { courseId }) => ({

    ...state,

    enrolledIds: [
      ...state.enrolledIds,
      courseId
    ]

  })),

  on(unenrollFromCourse, (state, { courseId }) => ({

    ...state,

    enrolledIds: state.enrolledIds.filter(id => id !== courseId)

  }))

);