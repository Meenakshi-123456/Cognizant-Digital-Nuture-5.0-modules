# Setting Up a React Environment

## Objective
Set up a React environment using create-react-app and build a simple application that displays a heading.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## Steps
1. Install Node.js and NPM from https://nodejs.org/en/download/
2. Install create-react-app globally: npm install -g create-react-app
3. Create a new React application: npx create-react-app myfirstreact
4. Navigate into the project folder: cd myfirstreact
5. Open the folder in Visual Studio Code
6. Open src/App.js and replace its content with a simple heading component
7. Run the application: npm start
8. Open the browser at localhost:3000 to view the result

## File
- src/App.js - root component that renders the heading "Welcome the first session of React"

## Key Concepts

### SPA vs MPA
A Single Page Application (SPA) loads a single HTML page and dynamically updates content using JavaScript, without full page reloads. A Multi Page Application (MPA) triggers a full server round-trip and page reload on each navigation.

### SPA Pros and Cons
Pros: faster navigation after initial load, smoother user experience, reduced server load for rendering.
Cons: slower initial load due to larger JS bundle, SEO can be harder without extra setup, requires JavaScript enabled in the browser.

### React
A JavaScript library for building user interfaces using a component-based architecture.

### Virtual DOM
An in-memory representation of the actual DOM. React updates the Virtual DOM first, compares it to the previous version (diffing), and efficiently updates only the changed parts of the real DOM, making UI updates much faster than direct DOM manipulation.

### Features of React
Component-based architecture, Virtual DOM for performance, JSX syntax, one-way data binding, reusable components, large ecosystem.

## Output
Browser displays the heading: "Welcome the first session of React"
<img width="939" height="411" alt="image" src="https://github.com/user-attachments/assets/89ab1ecb-f484-4df6-8578-2c871ff81c3c" />
