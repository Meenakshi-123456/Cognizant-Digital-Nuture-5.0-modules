# Hands-on 10 – Task 2: Testing a Service and an NgRx-Connected Component

## Objective

- Test `CourseService` using `HttpTestingController`.
- Verify successful HTTP responses.
- Verify HTTP error handling.
- Test an NgRx-connected component using `MockStore`.
- Verify the loading state using `store.setState()`.

## Technologies Used

- Angular 20
- TypeScript
- Jasmine
- Karma
- HttpClient Testing
- NgRx Store
- NgRx MockStore

## Execution

```bash
npm install
ng serve
ng test
```

## Expected Outcome

- Service tests passed successfully.
- Correct HTTP endpoint verified.
- HTTP error handling verified.
- NgRx-connected component tested successfully.
- Loading state verified using MockStore.
- All test cases passed.

```
Executed 20 of 20 SUCCESS
TOTAL: 20 SUCCESS
```

## Screenshots

- Browser Output
- Course Service Test
- Course List Component Test
- ng test Result (20/20 SUCCESS)