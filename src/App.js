import React from "react";
import logo from "./logo.svg";
import AddItem from "./Components/addItem.components";
import { Heading, Box, Input } from "rimble-ui";
import styled from "styled-components";
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

const Border = styled(Box)`
  background-color: #488abb;
  min-height: 540px;
  width: 480px;
  border-radius: 8px;
  margin: auto;
`;
function App() {
  return (
    <Container>
      <Border>
        <AddItem />
        <ListItem items={items} deleteItem={deleteItem} />
      </Border>
    </Container>
  );
}

export default App;
