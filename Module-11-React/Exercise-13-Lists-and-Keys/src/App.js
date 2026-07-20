import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div>

      <h1>Blogger App</h1>

      {/* if statement using && */}
      {showBooks && <BookDetails />}

      {/* ternary operator */}
      {showBlogs ? <BlogDetails /> : <h3>No Blogs Available</h3>}

      {/* element variable */}
      {showCourses ? <CourseDetails /> : null}

    </div>
  );
}

export default App;