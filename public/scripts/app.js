"use strict";

console.log("app");

var book = {
  title: "sex is not jerkoff",
  round: 3,
  subtitle: "lick or lick more",
  options: ["header", "more header"]
};

var displayOptions = function displayOptions() {
  if (book.options) {
    var options = book.options.map(function (option) {
      React.createElement(
        "p",
        null,
        option
      );
    });
    console.log(options);
    return options;
  }
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    book.title
  ),
  book.subtitle ? React.createElement(
    "p",
    null,
    book.subtitle
  ) : undefined,
  displayOptions()
);

var intro = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "nozomi ishii"
  ),
  React.createElement(
    "p",
    null,
    "age: 28"
  ),
  React.createElement(
    "p",
    null,
    "location: tokyo"
  )
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
// ReactDOM.render(intro, appRoot);
