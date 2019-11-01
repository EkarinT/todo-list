import React from "react";
import styled from "styled-components";
import { Button, Form, Box, Text } from "rimble-ui";

const TextStyle = styled(Text)`
  color: white;
  position: relative;
  padding: 8px;
`;
const IconButton = styled(Button.Text)`
  position: absolute;
  right: 5px;
  padding-bottom: 24px;
  color: #2d3748;
`;
const BoxStyle = styled(Box)`
  background-color: #a6d6f9;
  margin: 8px 56px;
  border-radius: 4px;
`;

const CheckBox = styled(Form.Check)`
  display: flex;
  position: absolute;
  right: 32px;
  bottom: 8px;
`;
function ListItem(props) {
  const items = props.items;
  const onChange = props.onChange;
  const listItem = items.map(item => {
    return (
      <BoxStyle key={item.key}>
        <TextStyle>
          {item.text}
          <CheckBox checked={item.itemCheck} onChange={onChange} />
          <IconButton
            icon="Delete"
            onClick={() => props.deleteItem(item.key)}
          ></IconButton>
        </TextStyle>
      </BoxStyle>
    );
  });
  return <Box>{listItem}</Box>;
}

export default ListItem;
