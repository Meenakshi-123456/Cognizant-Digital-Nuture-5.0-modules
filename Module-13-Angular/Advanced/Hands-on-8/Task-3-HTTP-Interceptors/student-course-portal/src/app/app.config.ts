import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { loggingInterceptor } from './interceptors/logging-interceptor';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withInterceptors([
  loggingInterceptor,
  authInterceptor,
  errorHandlerInterceptor,
  loadingInterceptor
])
    )
  ]
};