# Structural Directives in Angular

## Objective
Implement Angular structural directives (`*ngIf`, `*ngFor`, `*ngSwitch`) in the Student Course Portal to dynamically control the DOM based on application data.

## Steps
1. Added a loading state using `*ngIf` in `CourseListComponent`.
2. Displayed a "Loading courses..." message for 1.5 seconds using `setTimeout()` in `ngOnInit()`.
3. Used `*ngFor` to render all course cards dynamically.
4. Implemented `trackByCourseId()` to improve rendering performance.
5. Added a `gradeStatus` property (`passed`, `failed`, `pending`) to each course.
6. Used `*ngSwitch` in `CourseCardComponent` to display status badges.
7. Added an `*ngIf` with an `else` block to display "No courses available." when the course list is empty.
8. Verified the application by running it with `ng serve`.

## Output
- Loading message is displayed for 1.5 seconds.
- Course cards are rendered dynamically using `*ngFor`.
- Status badges display **Passed**, **Failed**, or **Pending** using `*ngSwitch`.
- `trackBy` is implemented for efficient list rendering.
- A fallback message is available when no courses exist.

## Screenshots
Screenshots are available in the `screenshots` folder:
- `01-loading-message.png`
- `02-course-list.png`
- `03-enroll-course.png`