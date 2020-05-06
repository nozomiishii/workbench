import React from "react";
import styled from "styled-components";

export const Div = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 2px solid #111;
  font-family: "Indie Flower", cursive;
  h1 {
    border-bottom: 1px solid #eee;
  }
  &:hover {
    transition: transform 0.4s linear;
    transform: translateY(-5px);
  }
`;

export const Note = ({ title = "title", memo = "memo..." }) => {
  return (
    <Div>
      <h1>{title}</h1>
      <p>{memo}</p>
    </Div>
  );
};
