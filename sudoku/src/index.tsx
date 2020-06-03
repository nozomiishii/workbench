import React from "react";
import ReactDOM from "react-dom";
import { unregister } from "./core";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { Content, Title, Card, Grid } from "./components";

const txt = "test";
console.log("txt", txt);
console.log("txt", txt);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
