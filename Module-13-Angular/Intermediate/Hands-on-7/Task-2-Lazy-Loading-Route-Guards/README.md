# Task 2 - Lazy Loading and Route Guards

## Objective
Implemented lazy loading for the enrollment feature and protected routes using Angular route guards.

## Features Implemented

### Lazy Loading
- Created Enrollment feature module.
- Configured lazy loading using loadChildren.
- Enrollment module loads only when navigating to `/enroll`.

### Auth Guard
- Created authentication guard.
- Implemented route protection for:
  - `/profile`
  - `/enroll`
- Redirects unauthenticated users to home.

### CanDeactivate Guard
- Implemented unsaved changes protection.
- Warns users before leaving the reactive enrollment form with unsaved data.

## Routes

| Route | Purpose |
|---|---|
| `/` | Home |
| `/profile` | Protected student profile |
| `/enroll` | Lazy loaded enrollment module |
| `/enroll/reactive` | Reactive enrollment form |

## Screenshots

- Lazy loading chunk verification
- Auth guard redirect
- Unsaved changes confirmation