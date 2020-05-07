import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  height: 80vh;
  width: 100%;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  padding: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 38px;
    text-align: center;
    margin-bottom: 5vh;
  }
`;

export const AppLayout = ({ children, title = "no title" }) => (
  <Layout>
    <h1>{title}</h1>
    {children}
  </Layout>
);
