# Component Lifecycle - Blog App

## Objective
Create a React app named blogapp that fetches and displays blog posts using componentDidMount(), and handles errors using componentDidCatch().

## Prerequisites
- Node.js
- NPM
- Visual Studio Code

## Steps
1. Create a React project: npx create-react-app blogapp
2. Create Post.js in src folder - a plain class representing a single post (id, title, body)
3. Create Posts.js - a class component extending React.Component
4. Initialize state.posts as an empty array in the constructor
5. Implement loadPosts() using the Fetch API to call https://jsonplaceholder.typicode.com/posts
6. Implement componentDidMount() to call loadPosts() after the component mounts
7. Implement render() to display each post's title and body
8. Implement componentDidCatch() to show errors as alert messages
9. Add the Posts component to App.js
10. Run the application: npm start

## Files
- src/Post.js - plain class representing a single post (id, title, body)
- src/Posts.js - class component with lifecycle hooks that fetches and displays posts
- src/App.js - renders the Posts component

## Key Concepts

### Component Lifecycle
Every React class component goes through three phases: Mounting (created and inserted into the DOM), Updating (re-rendered due to state/prop changes), and Unmounting (removed from the DOM). Lifecycle hooks let you run code at specific points in this process.

### constructor(props)
Called first, before the component is mounted. Used to initialize state.posts as an empty array.

### componentDidMount()
Called immediately after the component is inserted into the DOM. This is the recommended place to make API calls, since the component is guaranteed to be rendered by this point.

### loadPosts()
A custom method that uses the Fetch API to retrieve posts, converts the JSON response into Post objects, and updates state via setState(), which triggers a re-render.

### render()
Required in every class component. Maps over state.posts and displays each post's title and body.

### componentDidCatch(error, info)
A special lifecycle hook that catches JavaScript errors occurring anywhere in the component's child tree during rendering. Here it shows an alert with the error message, acting as a simple error boundary.

## Rendering Sequence
constructor -> render (initial, empty posts) -> componentDidMount -> loadPosts (async fetch) -> setState -> render (again, now with posts) -> displayed on screen

## Output
A list of blog post titles and bodies fetched from https://jsonplaceholder.typicode.com/posts, each displayed as a heading and paragraph.
