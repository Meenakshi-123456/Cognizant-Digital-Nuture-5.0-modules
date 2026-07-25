# Lifecycle Hooks in Angular

## Objective
Implement Angular lifecycle hooks (`ngOnInit`, `ngOnChanges`, and `ngOnDestroy`) to understand component initialization, input changes, and cleanup.

## Features
- Implemented `ngOnInit` in HomeComponent.
- Simulated course loading on initialization.
- Implemented `ngOnDestroy` in HomeComponent.
- Created CourseCardComponent.
- Used `@Input()` to receive course data.
- Implemented `ngOnChanges` to detect input changes.
- Displayed multiple CourseCard components using `CourseListComponent`.

## Lifecycle Hooks Used

### ngOnInit
- Executes once after component initialization.
- Logs:
  ```
  HomeComponent initialised — courses loaded
  ```

### ngOnChanges
- Executes whenever the input property changes.
- Logs previous and current values of the course object.

### ngOnDestroy
- Executes before the component is destroyed.
- Logs:
  ```
  HomeComponent destroyed
  ```

## Project Structure

```
Task-2-Lifecycle-Hooks
│
├── student-course-portal
├── README.md
└── screenshots
```

## Screenshots
- HomeComponent ngOnInit
- CourseCard Component
- CourseList Component
- CourseList HTML
- ngOnChanges Console
- Browser Output

## Technologies
- Angular 20
- TypeScript
- HTML
- CSS

## Outcome
Successfully implemented Angular lifecycle hooks and observed component initialization, input changes, and component destruction.