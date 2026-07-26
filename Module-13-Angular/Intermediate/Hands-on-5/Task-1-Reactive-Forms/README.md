# Reactive Forms using FormBuilder

## Objective

Build a reactive enrollment form using Angular Reactive Forms with `FormBuilder`, `FormGroup`, and built-in validators. The form validates user input and enables submission only when all required fields are valid.

## Topics Covered

* ReactiveFormsModule
* FormBuilder
* FormGroup
* FormControl
* Built-in Validators
* Validators.required
* Validators.minLength
* Validators.email
* Validators.requiredTrue
* Reactive Form Submission

## Steps Performed

1. Created a new Angular standalone project.
2. Generated the `ReactiveEnrollmentComponent`.
3. Added a route for `/enroll-reactive`.
4. Imported `ReactiveFormsModule`.
5. Injected `FormBuilder` into the component.
6. Created a reactive form using `FormBuilder.group()`.
7. Added the following form controls:

   * Student Name
   * Student Email
   * Course ID
   * Preferred Semester
   * Agree to Terms
8. Applied built-in validators:

   * Required
   * Minimum Length
   * Email
   * RequiredTrue for the checkbox
9. Bound the form using `[formGroup]` and `formControlName`.
10. Added a Submit button that remains disabled until the form is valid.
11. Logged both `enrollForm.value` and `enrollForm.getRawValue()` in the browser console on submission.

## Form Validation

* **Student Name**: Required and minimum 3 characters.
* **Student Email**: Required and must be a valid email address.
* **Course ID**: Required.
* **Preferred Semester**: Required.
* **Agree to Terms**: Checkbox must be selected before submission.

## Difference Between `value` and `getRawValue()`

* `enrollForm.value` returns the values of only the enabled form controls.
* `enrollForm.getRawValue()` returns the values of all form controls, including disabled controls.

## Output

* The reactive enrollment form is displayed successfully.
* The Submit button remains disabled until all validations are satisfied.
* On successful submission, the form data is displayed in the browser console using both `value` and `getRawValue()`.

## Screenshots

The `screenshots` folder contains:

* Reactive Enrollment Form
* Component TypeScript Code
* Component HTML Code
* Console Output
* Application Running (`ng serve`)
