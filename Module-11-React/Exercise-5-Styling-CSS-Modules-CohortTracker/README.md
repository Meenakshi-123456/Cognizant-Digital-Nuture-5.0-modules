# Styling React Components - Cohort Tracker

## Objective
Style a React component using CSS Modules and inline styles to build a dashboard displaying cohort details.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## Steps
1. Restore the React application's node packages using npm install
2. Create a CSS Module file named CohortDetails.module.css
3. Define a .box class with fixed width, inline-block display, margin, padding, border, and border radius
4. Define a style for the dt tag selector with font-weight 500
5. Import the CSS Module into the CohortDetails component
6. Apply the box class to the container div using className
7. Use an inline style on the h3 element to show green text when status is "Ongoing" and blue otherwise

## Files
- src/CohortDetails.module.css - CSS Module defining the .box class and dt tag styling
- src/CohortDetails.js - component displaying cohort details, styled using CSS Modules and inline styles

## Key Concepts

### CSS Modules
The .module.css naming convention tells the build tool (Webpack, via create-react-app) to scope class names locally to the component, avoiding naming collisions with other CSS files in the project.

### The .box class
Implements: 300px width, inline-block display, 10px overall margin, 10px top/bottom padding, 20px left/right padding, 1px black border, and 10px border radius.

### Importing and applying CSS Modules
import styles from './CohortDetails.module.css' followed by className={styles.box} - this is how CSS Modules are consumed in React; styles.box resolves to the auto-generated, scoped class name.

### Inline styles with conditional logic
style={{ color: cohort.status === "Ongoing" ? "green" : "blue" }} demonstrates React's inline style syntax (a JS object using camelCase properties), combined with a ternary expression to conditionally set color based on status.

## Output 
A dashboard displaying three cohort detail cards, each styled as a bordered box with rounded corners. Cohort names appear in green when status is "Ongoing" and blue otherwise.
<img width="975" height="337" alt="image" src="https://github.com/user-attachments/assets/c55754bf-61ac-42df-b312-d8bc0c92713c" />

