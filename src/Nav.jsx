import React, { useContext } from "react";
import { ContextApi } from "./ContextApi";
import { Menu } from "semantic-ui-react";

function Nav() {
  const [books, setBooks] = useContext(ContextApi);

  return (
    <Menu inverted>
      <Menu.Item name="My Library" />
      <Menu.Item>Number of Books:{books.length}</Menu.Item>
    </Menu>
  );
}

export default Nav;
