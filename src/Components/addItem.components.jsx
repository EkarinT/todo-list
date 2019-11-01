import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Box, Heading } from "rimble-ui";
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
  margin: 8px;
`;

const Border = styled(Box)`
  background-color: #488abb;
  min-height: 560px;
  width: 560px;
  border-radius: 8px;
  margin: auto;
`;

function AddItem() {
  const [items, setItems] = useState([]);
  const [checkItem, setCheckItem] = useState(false);
  const [text, setText] = useState({
    text: "",
    key: ""
  });

  const handleInput = props => {
    setText({
      text: props.target.value,
      key: Date.now()
    });
  };

  const handleCheck = props => {
    setCheckItem(props.target.checked);
  };

  const addItem = props => {
    props.preventDefault();
    const newItem = text;
    newItem.itemCheck = checkItem;
    if (newItem.text !== "") {
      const newItems = [...items, newItem];
      setItems(newItems);
      setText({
        text: "",
        key: ""
      });
      setCheckItem(false);
    }
  };

  const printIt = () => {
    const outPrint = items;
    console.log(outPrint);
  };

  const deleteItem = key => {
    const filteredItems = items.filter(item => item.key !== key);
    setItems(filteredItems);
  };

  return (
    <Container>
      <Border>
        <Header>Todo List</Header>
        <AddList onSubmit={addItem}>
          <Form.Input
            placeholder="Add item here"
            value={text.text}
            onChange={handleInput}
          />
          <Form.Check checked={text.itemCheck} onChange={handleCheck} />
          <AddButton type="submit">Add Item</AddButton>
          <AddButton onClick={printIt}>Print</AddButton>
        </AddList>

        <ListItem
          items={items}
          deleteItem={deleteItem}
          onChange={handleInput}
        />
      </Border>
    </Container>
  );
}

export default AddItem;
