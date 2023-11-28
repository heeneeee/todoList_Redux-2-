import React from "react";
import styled from "styled-components";

export default function Header() {
  return <StyledDiv>TodoList</StyledDiv>;
}

const StyledDiv = styled.div`
  background-color: lightpink;
  padding: 20px;
  font-size: larger;
  font-weight: 600;
  display: flex;
  justify-content: center;
`;
