import React from "react";

const Heading = (props) => (
  <h1 style={props.customStyle}>
    {props.hey} {props.name}
  </h1>
);

export default Heading;
