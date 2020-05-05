import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import Login from "./pages/Login";
import Home from "./pages/Home";

import LightTheme from "../themes/light";
import DarkTheme from "../themes/dark";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body{
    background: ${(p) => p.theme.backGroundColor};
    min-height: 100vh;
    margin: 0;
    color: ${(p) => p.theme.fontColor};
    font-family: 'Kaushan Script'
  }
`;

const App = () => {
  const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
