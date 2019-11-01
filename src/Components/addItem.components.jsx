import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Box, Heading, Input } from "rimble-ui";
import ListItem from "./listItem.component";
const Container = styled(Box)`
  text-align: center;
  background-color: #2d3748;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

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

const Border = styled(Box)`
  background-color: #488abb;
  min-height: 540px;
  width: 480px;
  border-radius: 8px;
  margin: auto;
`;

function AddItem() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: "",
    key: ""
  });
  const [itemChecked, setItemCheck] = useState(false);

  const handleInput = props => {
    setCurrentItem({
      text: props.target.value,
      key: Date.now()
    });
  };

  const handleCheck = e => {
    setItemCheck(e.target.checked);
  };

  const addItem = props => {
    props.preventDefault();
    const newItem = currentItem;
    const check = itemChecked;
    if (newItem.text !== "") {
      const newItems = [...items, newItem];
      setItemCheck(false);
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
  console.log(items);

  return (
    <Container>
      <Border>
        <Header>Todo List</Header>
        <AddList onSubmit={addItem}>
          <Form.Input
            placeholder="Add item here"
            value={currentItem.text}
            onChange={handleInput}
          />
          <Form.Check checked={itemChecked} onChange={handleCheck} value />
          <AddButton type="submit">Add Item</AddButton>
        </AddList>
        <ListItem
          items={items}
          checkbox={itemChecked}
          deleteItem={deleteItem}
          onChange={handleCheck}
        />
      </Border>
    </Container>
  );
}

export default AddItem;
