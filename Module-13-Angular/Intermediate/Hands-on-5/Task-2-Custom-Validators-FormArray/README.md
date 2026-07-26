# Custom Validators and FormArray in Reactive Forms

## Objective

Implement custom synchronous and asynchronous validators in an Angular Reactive Form and use `FormArray` to manage dynamically added course fields.

## Topics Covered

* Reactive Forms
* FormBuilder
* FormGroup
* FormArray
* FormControl
* Built-in Validators
* Custom Synchronous Validator
* Custom Asynchronous Validator
* Dynamic Form Controls

## Steps Performed

1. Created a Reactive Enrollment component.
2. Configured routing for `/enroll-reactive`.
3. Built the form using `FormBuilder`.
4. Implemented a custom synchronous validator (`noCourseCode`) to reject course IDs beginning with **XX**.
5. Displayed a custom validation message when an invalid course ID is entered.
6. Implemented an asynchronous validator (`simulateEmailCheck`) that checks whether an email containing **test@** is already taken.
7. Added a `FormArray` named `additionalCourses` to allow users to add multiple course fields dynamically.
8. Implemented **Add Another Course** functionality.
9. Implemented **Remove** functionality for dynamically added course fields.
10. Created a typed getter for `additionalCourses` to simplify access to the `FormArray`.
11. Logged the form values on successful submission.

## Validation Rules

* **Student Name:** Required, minimum 3 characters.
* **Student Email:** Required, valid email format, asynchronous email availability check.
* **Course ID:** Required and must not start with **XX**.
* **Preferred Semester:** Required.
* **Agree to Terms:** Must be checked.
* **Additional Courses:** Each dynamically added course is required.

## Output

* Invalid course IDs beginning with **XX** display a custom validation message.
* Emails containing **test@** display an "Email already taken" message after approximately 800 milliseconds.
* Users can dynamically add and remove additional course fields.
* Form submission succeeds only after all validations pass.

## Screenshots

The `screenshots` folder contains:

* Custom Validator
* Async Validator
* FormArray (Add/Remove Courses)
* TypeScript Code
* HTML Code
* Console Output
* Application Running (`ng serve`)
