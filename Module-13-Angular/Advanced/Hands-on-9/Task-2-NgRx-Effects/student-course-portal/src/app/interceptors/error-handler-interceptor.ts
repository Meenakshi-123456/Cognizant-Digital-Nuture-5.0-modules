import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {

      if (error.status === 401) {
        console.log('Unauthorized (401)');
        // Later you can navigate to home/login here.
      }

      if (error.status === 500) {
        console.log('Internal Server Error (500)');
      }

      return throwError(() => error);
    })
  );
};