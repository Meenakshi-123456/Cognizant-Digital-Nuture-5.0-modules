# Hands-On 10 - Unit Testing Angular Applications

## Task 1: Testing a Component — CourseCardComponent

### Objective
Write unit tests for CourseCardComponent using Jasmine, Karma, and Angular TestBed.

### Topics Covered
- Jasmine (describe, it, expect)
- spyOn
- TestBed
- fixture & debugElement
- Testing @Input
- Testing @Output
- ngOnChanges
- Karma Test Runner

### Tests Implemented
1. Component creation test.
2. Render course name using @Input.
3. Emit course id using @Output.
4. Verify ngOnChanges execution.
5. Display course fee correctly.

### Expected Outcome
All unit tests pass successfully using:

```bash
ng test
```

### Result
✔ All tests passed successfully.