import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #111;
  h1 {
    border-bottom: 1px solid #eee;
  }
  &:hover {
    transition: transform 0.4s linear;
    transform: translateY(-5px);
  }
`;

export const Note = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
