import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Login from "./pages/Login";
import Home from "./pages/Home";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
