import { ActionReducerMap } from '@ngrx/store';

import {
  courseReducer,
  CourseState
} from './course/course.reducer';


import {
  enrollmentReducer,
  EnrollmentState
} from './enrollment/enrollment.reducer';



export interface AppState {

  course: CourseState;

  enrollment: EnrollmentState;

}



export const reducers: ActionReducerMap<AppState> = {


  course: courseReducer,


  enrollment: enrollmentReducer


};