import React, { Component, useState } from "react";
import styled from "styled-components";
import { Button, Form, Box, Heading, Input } from "rimble-ui";
import ListItem from "./listItem.component";

const Header = styled(Heading.h2)`
  margin: 1rem;
`;
const AddList = styled(Form)`
  display: flex;
  padding: 24px;
  margin: auto 36px;
`;

const AddButton = styled(Button)`
  border-radius: 8px;
  font-size: 16px;
  background-color: pink;
`;

function AddItem() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({ text: "", key: "" });

  const handleInput = props => {
    setCurrentItem({
      text: props.target.value,
      key: Date.now()
    });
  };

  const addItem = props => {
    props.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== "") {
      const newItems = [...items, newItem];
      setItems(newItems);
      setCurrentItem({
        text: "",
        key: ""
      });
    }
  };

  const deleteItem = key => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
  };
  return (
    <>
      <Header>Todo List</Header>
      <AddList onSubmit={addItem}>
        <Form.Input
          placeholder="Add item here"
          value={currentItem.text}
          onChange={handleInput}
        />
        <AddButton type="submit">Add Item</AddButton>
      </AddList>
    </>
  );
}

export default AddItem;
