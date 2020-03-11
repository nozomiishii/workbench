import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>INFO</h1>
    <p>The info is: {props.info}</p>
  </div>
);

ReactDOM.render(
  <Info info="these are details" />,
  document.getElementById("app")
);
