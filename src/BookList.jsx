import React, { useState, useContext } from "react";
import Books from "./Books";
import { ContextApi } from "./ContextApi";

function BookList() {
  const [books, setBooks] = useContext(ContextApi);

  return (
    <div>
      {books.map((book) => (
        <Books
          title={book.title}
          author={book.author}
          key={book.id}
          price={book.price}
        />
      ))}
    </div>
  );
}

export default BookList;
