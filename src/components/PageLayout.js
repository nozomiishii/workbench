import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

const Content = styled.main`
  max-width: 980px;
  min-height: 86vh;
  margin: 7vh auto 0 auto;
  padding: 20px 0;
`;

export const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};
