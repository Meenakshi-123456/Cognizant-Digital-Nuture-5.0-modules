# Attribute Directives — ngClass and ngStyle

## Objective
Apply dynamic CSS classes and inline styles using Angular attribute directives.

## Implementation

### ngClass
- Used `[ngClass]` to apply CSS classes dynamically.
- Applied `card--enrolled` class when the course is enrolled.
- Applied `card--full` class when credits are greater than or equal to 4.
- Created reusable CSS classes in `course-card.css`.

### ngStyle
- Used `[ngStyle]` to dynamically change the card's left border color based on grade status.
- Border colors:
  - Green → Passed
  - Red → Failed
  - Grey → Pending

### Expand/Collapse Feature
- Added `isExpanded` property in CourseCard component.
- Used `[ngClass]="cardClasses"` to toggle the expanded class.
- Added a Show Details button to change the expanded state.

### Getter for ngClass
- Refactored conditional class binding using the `cardClasses` getter.
- Getters keep templates clean by moving conditional logic into the component class.

## Files Modified
src/app/
│
├── app.ts
├── app.html
├── course-card/
│ ├── course-card.ts
│ ├── course-card.html
│ └── course-card.css


## Output

- Enrolled course cards display enrolled styling.
- Full-credit courses display additional styling.
- Grade status is reflected through border color.
- Show Details button expands the card.
