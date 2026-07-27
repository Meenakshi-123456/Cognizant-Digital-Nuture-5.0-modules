import { createAction, props } from '@ngrx/store';


export const enrollInCourse = createAction(
  '[Enrollment] Enroll In Course',
  props<{ courseId: string }>()
);



export const unenrollFromCourse = createAction(
  '[Enrollment] Unenroll From Course',
  props<{ courseId: string }>()
);