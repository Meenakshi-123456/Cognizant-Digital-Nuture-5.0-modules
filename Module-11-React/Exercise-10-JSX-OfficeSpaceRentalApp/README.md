# JSX - Office Space Rental App

## Objective
Build a React application using JSX to create elements, attributes, and render the DOM, displaying office space rental listings.

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## Steps
1. Restore the React application's node packages using npm install
2. Create a data.js file with an array of office space objects (Name, Rent, Address)
3. Create App.css defining two classes: textRed and textGreen
4. Create the OfficeSpace component to render a single office item using JSX expressions
5. Use an image tag with a JSX attribute to display the office space photo
6. Apply conditional CSS logic - Rent is styled red if it's ≤ 60000, green if it's above 60000
7. Loop through the list of office objects in App.js using map() and render an OfficeSpace component for each

## Files
- src/data.js - array of office space objects with Name, Rent, and Address
- src/App.css - defines textRed and textGreen classes for conditional Rent styling
- src/OfficeSpace.js - component displaying a single office's image, name, rent (color-coded), and address
- src/App.js - main component rendering the heading and looping through the office list

## Key Concepts

### JSX Elements
const element = "Office Space" demonstrates storing a JS value and injecting it into JSX using curly braces: {element}.

### JSX Attributes
const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" /> shows how JSX attributes can be dynamically set using JS expressions inside curly braces.

### Rendering Objects with JSX
Object properties (item.Name, item.Rent, item.Address) are accessed directly inside JSX using dot notation within curly braces.

### Looping through a list
offices.map((item, index) => <OfficeSpace key={index} item={item} />) demonstrates rendering a list of components from an array of objects, using ES6 map().

### Conditional inline CSS
An if-else block builds a colors array, pushing 'textRed' when Rent <= 60000 and 'textGreen' otherwise, then applying it via className={colors.join(' ')}.

## Output
A page displaying "Office Space , at Affordable Range" as the heading, followed by a list of office cards - each showing an image, name, rent (in red or green depending on the amount), and address.
<img width="941" height="506" alt="image" src="https://github.com/user-attachments/assets/2d01190c-c4b1-45a4-99fe-fecb6c767031" />

