const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.get("/weather", (req, res) => {
  res.send("weather app");
});

app.listen("3000", () => console.log("listening 3000"));
