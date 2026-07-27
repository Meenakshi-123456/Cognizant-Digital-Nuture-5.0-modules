import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loadingService = inject(LoadingService);

  // Delay showing the loading indicator until the current change detection completes
  queueMicrotask(() => loadingService.show());

  return next(req).pipe(
    finalize(() => {
      queueMicrotask(() => loadingService.hide());
    })
  );
};