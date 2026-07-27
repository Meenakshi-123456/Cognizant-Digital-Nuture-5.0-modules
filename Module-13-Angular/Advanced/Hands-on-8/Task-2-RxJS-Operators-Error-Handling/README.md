# Hands-on 8 - Task 2: RxJS Operators and Error Handling

## Project Title
Student Course Portal - RxJS Operators and Error Handling

## Objective
The objective of this task is to apply RxJS operators in an Angular application to transform HTTP responses, handle errors, retry failed requests, and manage dependent HTTP calls efficiently.

## Technologies Used

- Angular v20
- TypeScript
- RxJS
- Angular HttpClient
- JSON Server

---

# Implementation Details

## 1. map Operator

The `map` operator is used to transform the API response before it reaches the component.

Implementation:

```typescript
map(courses =>
  courses.filter(course => course.credits > 0)
)
```

### Purpose:
- Filters courses based on credits.
- Only courses with credits greater than 0 are displayed.

---

## 2. catchError Operator

The `catchError` operator is implemented to handle HTTP request failures gracefully.

Implementation:

```typescript
catchError(err => {
  console.error(err);

  return throwError(() =>
    new Error('Failed to load courses. Please try again.')
  );
})
```

### Purpose:
- Handles API errors.
- Displays a meaningful error message instead of breaking the application.

Error message displayed:

```
Failed to load courses. Please try again.
```

---

## 3. tap Operator

The `tap` operator is used for side effects such as logging.

Implementation:

```typescript
tap(courses => {
  console.log('Courses loaded:', courses.length);
})
```

### Purpose:
- Logs the number of courses loaded.
- Does not modify the data stream.

### Explanation:
`tap` is preferred over performing side effects inside `map` because `tap` is specifically designed for side effects like logging and analytics. The `map` operator should only be used for transforming data.

Example console output:

```
Courses loaded: 2
```

---

## 4. retry Operator

The `retry` operator is used to automatically retry failed HTTP requests.

Implementation:

```typescript
retry(2)
```

### Purpose:
- Retries failed HTTP requests two times.
- If all retries fail, the error is passed to `catchError`.

Flow:

```
HTTP Request
      |
      ↓
Failed Request
      |
      ↓
Retry 2 Times
      |
      ↓
Show Error Message
```

---

## 5. switchMap Operator

The `switchMap` operator is used to handle dependent HTTP calls.

Implementation:

```typescript
switchMap(courseId =>
  this.enrollmentService.getStudentsByCourse(courseId)
)
```

### Purpose:
- When a course is selected, the enrolled students are loaded.
- It combines multiple observables into one stream.

### Explanation:
`switchMap` cancels the previous inner Observable when a new course selection arrives. This prevents outdated HTTP responses from updating the UI.

Example:

```
Select Course
      |
      ↓
Get Course Students
      |
      ↓
Display Students
```

---

# Project Features

## Course Management

- Display available courses from JSON Server.
- Filter courses using RxJS map operator.
- Handle API errors.

## Student Enrollment

- Load students based on selected course.
- Use switchMap for dependent API calls.

## Error Handling

- Retry failed API calls.
- Display user-friendly error messages.

---

# API Endpoints

## Courses

```
GET http://localhost:3000/courses
```

## Students

```
GET http://localhost:3000/students
```

## Students by Course

Example:

```
GET http://localhost:3000/students?courseId=2
```

---

# Testing Performed

## Successful Course Loading

Console output:

```
Courses loaded: 2
```

## Error Handling Test

Steps:
1. Stop JSON Server.
2. Refresh the application.

Result:

```
Failed to load courses. Please try again.
```

## Retry Test

Failed HTTP requests are retried two times before showing the error.

## switchMap Test

Selecting a course loads the enrolled students.

Example Output:

```
Students

Ravi - ravi@gmail.com
Anu - anu@gmail.com
```

---

# Folder Structure

```
src
└── app
    ├── components
    │   ├── add-course
    │   └── course-list
    │
    ├── models
    │   ├── course.ts
    │   └── student.ts
    │
    ├── services
    │   ├── course.service.ts
    │   └── enrollment.ts
    │
    └── interceptors
```

---

# Screenshots

1. Application displaying course list.
2. Console showing tap operator logging.
3. Students loaded using switchMap.
4. Error message after stopping JSON Server.
5. Angular project folder structure.

---

# Conclusion

The Student Course Portal successfully demonstrates RxJS operators in Angular. The application transforms HTTP responses using `map`, handles errors using `catchError`, performs logging using `tap`, retries failed requests using `retry`, and manages dependent HTTP calls using `switchMap`.