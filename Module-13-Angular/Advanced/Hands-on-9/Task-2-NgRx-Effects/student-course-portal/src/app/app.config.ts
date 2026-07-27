import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';

import { provideStore } from '@ngrx/store';

import { provideEffects } from '@ngrx/effects';

import { provideStoreDevtools } from '@ngrx/store-devtools';


import { routes } from './app.routes';

import { reducers } from './store';

import { CourseEffects } from './store/course/course.effects';



export const appConfig: ApplicationConfig = {

  providers: [

    provideRouter(routes),

    provideHttpClient(),

    provideStore(reducers),

    provideEffects([
      CourseEffects
    ]),

    provideStoreDevtools({
      maxAge: 25
    })

  ]

};