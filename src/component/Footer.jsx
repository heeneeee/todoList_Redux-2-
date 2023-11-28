import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <StFooter>
      <div>Footer</div>
    </StFooter>
  );
}

const StFooter = styled.div`
  background-color: lightgreen;
  padding: 20px;
`;
