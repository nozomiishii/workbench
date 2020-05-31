import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./Store";
import { Router, RouteComponentProps } from "@reach/router";
import { HomePage } from "./HomePage";
import { FavPage } from "./FavPage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <App path="/">
          <RouterPage pageComponent={<HomePage />} path="/" />
          <RouterPage pageComponent={<FavPage />} path="/faves" />
        </App>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
