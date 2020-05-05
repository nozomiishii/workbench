import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

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

const CustomLink = ({ isActive, children, ...props }) => (
  <Link {...props}>{children}</Link>
);

const StyledLink = styled(CustomLink)`
  padding: 4px;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  text-decoration: ${(p) => (p.isActive ? "underline" : "none")};
  color: black;
`;

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <Wrapper>
      <Title>Keeper App</Title>
      <StyledLink to="/" isActive={pathname === "/"}>
        HOME
      </StyledLink>
      <StyledLink to="/contact" isActive={pathname === "/contact"}>
        CONTACT
      </StyledLink>
    </Wrapper>
  );
};
