import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background: linear-gradient(
    to bottom,
    ${(p) => p.theme.primary},
    ${(p) => p.theme.secondary}
  );
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  border-radius: 50%;
  background: white;
  transition: transfrom 0.1s linear;
  transform: translate(${(p) => (p.isActive ? "26px" : "1px")});
`;

export const Toggle = ({ isActive, onToggle }) => {
  return (
    <Wrapper onClick={onToggle}>
      <Notch isActive={isActive} />
    </Wrapper>
  );
};
