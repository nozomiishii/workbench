import React from "react";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Exercises />
      <Footer />
    </>
  );
}

export default App;
