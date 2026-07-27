import { createReducer, on } from '@ngrx/store';
import { Course } from '../../models/course';

import {
  loadCoursesSuccess,
  enrollInCourse,
  unenrollFromCourse
} from './course.actions';


export interface CourseState {

  courses: Course[];

  enrolledIds: number[];

}


export const initialState: CourseState = {

  courses: [],

  enrolledIds: []

};


export const courseReducer = createReducer(

  initialState,


  on(loadCoursesSuccess, (state, {courses}) => ({

    ...state,

    courses

  })),



  on(enrollInCourse, (state,{courseId}) => ({

    ...state,

    enrolledIds:[
      ...state.enrolledIds,
      courseId
    ]

  })),



  on(unenrollFromCourse,(state,{courseId}) => ({

    ...state,

    enrolledIds:
      state.enrolledIds.filter(id => id !== courseId)

  }))

);