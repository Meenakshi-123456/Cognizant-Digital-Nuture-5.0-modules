# Exercise 9 - ES6 Features - CricketApp

## Objective
Build a React application named **cricketapp** that demonstrates core ES6 features:
- `map()` method
- Arrow functions
- Destructuring
- Spread / merge syntax

## Features Implemented

### 1. ListofPlayers
- Declares an array of 11 players (name + score) and renders them using `.map()`
- Filters players with scores below 70 using an ES6 arrow function

### 2. IndianPlayers
- Displays Odd Team and Even Team players using **array destructuring**
- Declares `T20Players` and `RanjiTrophyPlayers` arrays, merges them using the **spread operator**, and displays the merged list

### 3. Home Page Toggle
- A `flag` variable in `App.js` switches between the two views using a simple `if...else`
  - `flag = true` → shows List of Players / Scores below 70
  - `flag = false` → shows Indian Team (Odd/Even + Merged list)

## Tech Stack
- React (Create React App)
- Node.js / NPM

## How to Run
\`\`\`bash
npm install
npm start
\`\`\`
Open [http://localhost:3000](http://localhost:3000)

## Output
- **flag = true** → List of Players + Players with score < 70

- **flag = false** → Indian Team Odd/Even Players + Merged Indian Players list
<img width="1514" height="752" alt="image" src="https://github.com/user-attachments/assets/3f3707c9-827f-4339-9b6a-7dfc6d12c69a" />

