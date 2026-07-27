# Module 13 - Angular Advanced

## Hands-on 8 - Task 3: HTTP Interceptors

### Objective
Implement Angular HTTP Interceptors for authentication, error handling, and loading indication.

### Features Implemented
- Auth Interceptor
  - Adds an Authorization header (`Bearer mock-token-12345`) to every HTTP request.

- Error Handler Interceptor
  - Handles HTTP errors globally using `catchError`.
  - Detects 401 and 500 status codes.

- Loading Interceptor
  - Uses a `LoadingService` with a `BehaviorSubject`.
  - Shows a loading indicator while HTTP requests are in progress.
  - Hides the loading indicator when requests complete using `finalize()`.

### Verification
- Verified the Authorization header in Chrome DevTools → Network → Request Headers.
- Application successfully loads course data.
- Loading indicator is connected to `LoadingService`.