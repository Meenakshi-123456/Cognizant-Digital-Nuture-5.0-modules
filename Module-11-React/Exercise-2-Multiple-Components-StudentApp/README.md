# Creating Multiple React Components - Student Management Portal

## Objective
Create a React app named StudentApp with three components (Home, About, Contact), each displaying its own welcome message, and render all three from App.js.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## Steps
1. Create a React project: npx create-react-app StudentApp
2. Create a Components folder under src
3. Create Home.js, About.js, and Contact.js as class components, each rendering a welcome message
4. Edit App.js to import and render all three components
5. Run the application: npm start
6. Open the browser at localhost:3000 to view all three messages

## Files
- src/Components/Home.js - displays "Welcome to the Home Page of Student Management Portal"
- src/Components/About.js - displays "Welcome to the About Page of Student Management Portal"
- src/Components/Contact.js - displays "Welcome to the Contact Page of Student Management Portal"
- src/App.js - imports and renders Home, About, and Contact components

## Key Concepts

### React Components
Reusable, self-contained pieces of UI. Can be written as class components (ES6 classes extending React.Component) or function components (plain JavaScript functions).

### Class vs Function Components
Class components use a render() method to return JSX and can hold state via this.state. Function components return JSX directly and use Hooks like useState for state management in modern React.

### render() function
Required in every class component; returns the JSX that describes what should appear on the screen.

### Components vs plain JS functions
Components specifically return JSX/UI and are tied to React's rendering lifecycle, while a regular JavaScript function can perform any logic and isn't tied to rendering UI.

## Output 
Welcome to the Home Page of Student Management Portal
Welcome to the About Page of Student Management Portal
Welcome to the Contact Page of Student Management Portal
<img width="939" height="502" alt="image" src="https://github.com/user-attachments/assets/b1353f37-2651-4338-8c0c-3b3391649d4a" />
