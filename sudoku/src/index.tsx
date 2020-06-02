import React from "react";
import ReactDOM from "react-dom";
import { unregister } from "./core";
import { GlobalStyles } from "./styles";

const txt = "test";
console.log("txt", txt);
console.log("txt", txt);

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <div>hello world</div>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

unregister();
