# Function Component - Score Calculator App

## Objective
Create a React app named scorecalculatorapp with a function component named CalculateScore that accepts Name, School, total, and goal to calculate and display a student's average score.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## Steps
1. Create a React project: npx create-react-app scorecalculatorapp
2. Create a Components folder under src, add CalculateScore.js
3. Write CalculateScore as a function component using destructured props (Name, School, total, goal)
4. Create a Stylesheets folder under src, add mystyle.css for component styling
5. Edit App.js to import and render CalculateScore with sample prop values
6. Run the application: npm start
7. Open the browser at localhost:3000 to view the result

## Files
- src/components/CalculateScore.js - function component that calculates and displays student score
- src/Stylesheets/mystyle.css - styling for Name, School, Total, Score, and overall layout
- src/App.js - renders CalculateScore with sample student data

## Key Concepts

### Function components
Written as arrow functions that directly return JSX, rather than using ES6 classes. This is React's modern, preferred approach to writing components.

### Props destructuring
{Name, School, total, goal} destructures the props object passed from App.js, allowing direct use of prop values instead of writing props.Name, props.School, etc.

### Helper functions
percentToDecimal and calcScore are plain JavaScript functions (not components) used to compute the score, demonstrating that components can call regular functions for logic while keeping JSX clean.

### Passing props
In App.js, <CalculateScore Name={"Steeve"} School={"DNV Public School"} total={284} goal={3} /> passes four props into the component.

## Output
Student Details:
Name: Steeve
School: DNV Public School
Total: 284 Marks
Score: 94.67%
<img width="944" height="503" alt="image" src="https://github.com/user-attachments/assets/223e9d15-7f8a-47b2-a2a5-5df7903e3be4" />

