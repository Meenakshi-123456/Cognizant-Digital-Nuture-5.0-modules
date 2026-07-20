import React from "react";

function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "React JS",
      trainer: "Scott"
    },
    {
      id: 2,
      name: "Spring Boot",
      trainer: "James"
    },
    {
      id: 3,
      name: "Java Programming",
      trainer: "Robert"
    }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.trainer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;