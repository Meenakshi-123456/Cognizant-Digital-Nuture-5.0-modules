import React from "react";

function BookDetails() {
  const books = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho"
    },
    {
      id: 2,
      title: "Think and Grow Rich",
      author: "Napoleon Hill"
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear"
    }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;