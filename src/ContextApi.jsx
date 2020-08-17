import React, { useState, createContext } from "react";

export const ContextApi = createContext();

export const BookProvider = (props) => {
  const [books, setBooks] = useState([
    {
      author: "Orhan Pamuk",
      title: "Benim Adim Kirmizi",
      price: "£10",
      id: 10,
    },

    {
      author: "Yasar Kemal",
      title: "Ince Memed",
      price: "£15",
      id: 11,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 12,
    },
    {
      author: "Amin Maalouf",
      title: "Olumcul Kimliker",
      price: "£8",
      id: 13,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 14,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 15,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 16,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 17,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 18,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 19,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 20,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 21,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 22,
    },
    {
      author: "Gabriel García Márquez",
      title: "One Hundred Years of Solitude ",
      price: "£20",
      id: 23,
    },
  ]);

  return (
    <ContextApi.Provider value={[books, setBooks]}>
      {props.children}
    </ContextApi.Provider>
  );
};
