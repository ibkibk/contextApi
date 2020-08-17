import React, { useState, useContext } from "react";
import { ContextApi } from "./ContextApi";
import { Input, Button } from "semantic-ui-react";

const AddBook = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [books, setBooks] = useContext(ContextApi);

  const updataAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const updataTitle = (e) => {
    setTitle(e.target.value);
  };
  const updataPrice = (e) => {
    setPrice(e.target.value);
  };

  const addBook = (e) => {
    e.preventDefault();
    if (author !== "" && title !== "" && price !== "") {
      setBooks((prevBooks) => [
        ...prevBooks,
        { author: author, title: title, price: price },
      ]);
    }
    setAuthor("");
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={addBook}>
      <Input
        style={{ margin: "10px" }}
        placeholder="Author"
        type="text"
        name="author"
        value={author}
        onChange={updataAuthor}
      />
      <Input
        style={{ margin: "10px" }}
        placeholder="title"
        type="text"
        name="Title"
        value={title}
        onChange={updataTitle}
      />
      <Input
        style={{ margin: "10px" }}
        placeholder="Price"
        type="text"
        name="price"
        value={price}
        onChange={updataPrice}
      />
      <Button secondary>Submit</Button>
    </form>
  );
};

export default AddBook;
