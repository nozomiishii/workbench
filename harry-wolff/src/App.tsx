import React from "react";
import { Header } from "./components/Layouts";
import { Exercises } from "./components/Exercises/index";
import { createGlobalStyle } from "styled-components";
import { Form } from "./components/Form";

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
      <Form />
    </>
  );
}

export default App;
