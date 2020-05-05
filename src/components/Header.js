import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 7vh;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
`;

const Title = styled.div`
  margin: auto auto auto 0;
`;

export const Header = () => {
  return (
    <Wrapper>
      <Title>Keeper App</Title>
    </Wrapper>
  );
};
