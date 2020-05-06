import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.header`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 7vh;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Title = styled.div`
  margin: auto auto auto 0;
`;

const activeClassName = "nav-item-active";
const StyledLink = styled(NavLink).attrs({ activeClassName })`
  padding: 4px;
  margin: auto 0;
  font-weight: normal;
  text-decoration: none;
  color: black;
  &.${activeClassName} {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const Header = () => {
  return (
    <Wrapper>
      <Title>Keeper App</Title>
      <StyledLink to="/" exact>
        HOME
      </StyledLink>
      <StyledLink to="/contact">CONTACT</StyledLink>
      <StyledLink to="/emojipedia">EMOJIPEDIA</StyledLink>
      <StyledLink to="/playground">PLAYGROUND</StyledLink>
      <StyledLink to="/login">LOGIN</StyledLink>
    </Wrapper>
  );
};
