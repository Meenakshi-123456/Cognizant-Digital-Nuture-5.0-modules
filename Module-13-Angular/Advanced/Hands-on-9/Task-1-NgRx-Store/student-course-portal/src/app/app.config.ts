import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { provideStore } from '@ngrx/store';
import { provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { courseReducer } from './store/course/course.reducer';

import { loggingInterceptor } from './interceptors/logging-interceptor';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course/course.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
        loggingInterceptor,
        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor
      ])
    ),

    provideStore(),

provideState('course', courseReducer),

provideEffects([CourseEffects]),

provideStoreDevtools({
  maxAge: 25
})
  ]
};