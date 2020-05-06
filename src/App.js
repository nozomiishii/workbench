import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Contact, Emojipedia, Login, Playground } from "./pages";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/emojipedia" component={Emojipedia} />
          <Route path="/login" component={Login} />
          <Route path="/playground" component={Playground} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
