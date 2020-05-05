import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  height: 7vh;
  width: 100%;
  p {
    text-align: center;
  }
`;

export const Footer = () => {
  return (
    <Wrapper>
      <p>©{new Date().getFullYear()}</p>
    </Wrapper>
  );
};
