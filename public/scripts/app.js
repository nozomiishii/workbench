"use strict";

var app = {
  title: "Studing Coding",
  subtitle: "p5.js and React are awesome",
  options: ["one", "two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "here are your options" : "No options"
  ),
  React.createElement(
    "form",
    null,
    React.createElement("input", { type: "text", name: "option" }),
    React.createElement(
      "button",
      null,
      "Add option"
    )
  )
);

var root = document.getElementById("app");
ReactDOM.render(template, root);
