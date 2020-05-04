import React from "react";
import { Button } from "components/common";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>app</h1>
      <Button>button</Button>
      <Button secondary>button</Button>
      <Button disabled>button</Button>
      <Button large>button</Button>
    </>
  );
};

export default App;
