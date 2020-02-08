const express = require("express");
const app = express();
const Joi = require('joi');

app.use(express.json());

const sex = [
  { id: 1, name: "pussy" },
  { id: 2, name: "dick" },
  { id: 3, name: "ass" }
];

app.get("/", (req, res) => {
  res.send("juicy pussy");
});

app.get("/sex", (req, res) => {
  res.send(sex);
});

app.post("/sex", (req, res) => {
  if(!req.body.name || req.body.name.length < 2){
    res.status(400).send('name is required and should be minimum 2 characters');
    return;
  }

  const style = {
    id: sex.length + 1,
    name: req.body.name
  };
  sex.push(style);
  res.send(style);
});

app.get("/sex/:id", (req, res) => {
  const style = sex.find(s => s.id === parseInt(req.params.id));
  if (!style) res.status(404).send("404 not found, thickie");
  res.send(style);
});

const port = process.env.PORT || 1919;
app.listen(port, () => console.log(`${port} is dripping wet`));
