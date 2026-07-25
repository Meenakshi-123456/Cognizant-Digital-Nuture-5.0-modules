# Module 13 - Hands-on 2 - Task 3: @Input and @Output (Parent-Child Communication)

## Objective

Implement parent-child communication in Angular using `@Input` to pass data from a parent component to a child component and `@Output` with `EventEmitter` to send events from the child back to the parent.

---

## Features Implemented

* Created a reusable `CourseCardComponent`.
* Passed course details from `CourseListComponent` using `@Input()`.
* Implemented an `Enroll` button in the child component.
* Used `@Output()` and `EventEmitter<number>` to notify the parent when a course is selected.
* Displayed the selected course ID in the parent component.
* Logged the selected course ID to the browser console.

---

## Project Structure

```text
src/
└── app/
    ├── components/
    │   └── course-card/
    │       ├── course-card.ts
    │       ├── course-card.html
    │       └── course-card.css
    └── pages/
        └── course-list/
            ├── course-list.ts
            ├── course-list.html
            └── course-list.css
```

---

## How It Works

1. The parent component maintains an array of five course objects.
2. Each course is passed to the child component using `@Input`.
3. Clicking the **Enroll** button emits the course ID using `@Output`.
4. The parent receives the event, updates the selected course ID, and logs it to the console.
5. The selected course ID is displayed below the course list.

---

## Output

* Displays five course cards.
* Each card shows:

  * Course ID
  * Course Name
  * Course Code
  * Credits
* Clicking **Enroll**:

  * Displays the selected course ID.
  * Logs the course ID in the browser console.

---

## Screenshots

* `01-course-card-ts.png`
* `02-course-card-html.png`
* `03-course-list-ts.png`
* `04-course-list-html.png`
* `05-browser-output.png`
* `06-console-output.png`
* `07-ng-serve.png`

---

## Technologies Used

* Angular 20
* TypeScript
* HTML
* CSS

---

## Learning Outcome

This exercise demonstrates Angular's recommended parent-child communication pattern using `@Input` for one-way data flow from parent to child and `@Output` with `EventEmitter` for sending events from child to parent.
