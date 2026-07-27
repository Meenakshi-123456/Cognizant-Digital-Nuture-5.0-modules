# Module 13 – Angular Advanced
## Hands-on 9 – Task 1: NgRx Store

### Objective
Implement NgRx Store for state management in the Student Course Portal application. Manage course data using Actions, Reducers, Selectors, and Effects. Verify state changes using Redux DevTools.

---

## Technologies Used

- Angular 20
- TypeScript
- RxJS
- NgRx Store
- NgRx Effects
- Redux DevTools
- JSON Server

---

## Features Implemented

- Configured NgRx Store
- Created Course Actions
- Implemented Course Reducer
- Created Course Selectors
- Implemented NgRx Effects
- Registered Store and Effects
- Integrated CourseService with HTTP Client
- Loaded courses from JSON Server
- Verified state using Redux DevTools

---

## Project Structure

```
src/
 ├── app/
 │    ├── components/
 │    ├── models/
 │    ├── services/
 │    ├── store/
 │    │     └── course/
 │    │          ├── course.actions.ts
 │    │          ├── course.reducer.ts
 │    │          ├── course.selectors.ts
 │    │          └── course.effects.ts
 │    ├── interceptors/
 │    ├── app.config.ts
 │    └── app.ts
 ├── db.json
 └── screenshots/
```

---

## Installation

Install dependencies:

```bash
npm install
```

Start Angular:

```bash
ng serve
```

Start JSON Server:

```bash
json-server --watch db.json --port 3000
```

Open:

```
http://localhost:4200
```

---

## Redux DevTools Verification

Verified the following actions:

- @ngrx/store/init
- @ngrx/store/update-reducers
- [Course] Load Courses
- [Course] Load Courses Success

State changes:

- loading: false → true
- loading: true → false
- courses loaded successfully

---

## Output

- Course list displayed successfully.
- Data loaded from JSON Server.
- Redux DevTools displayed dispatched actions.
- HTTP GET request executed successfully.

---

## Screenshots

Store screenshots inside the `screenshots` folder.

- 01-app-running.png
- 02-redux-devtools.png
- 03-console-http-request.png

---

## Git Commands

```bash
git add .
git commit -m "Module 13 - Hands-on 9 - NgRx Store"
git push origin main
```

---

## Result

Successfully implemented NgRx Store, Effects, Reducers, Selectors, and Redux DevTools integration for the Student Course Portal application.