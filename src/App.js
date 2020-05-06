import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Contact, Emojipedia } from "./pages";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
