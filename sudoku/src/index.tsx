import React from "react";
import ReactDOM from "react-dom";
import { configureStore, unregister } from "./core";
import { Provider } from "react-redux";
import { GlobalStyles, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { Content, Title, Card, Grid } from "./components";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
