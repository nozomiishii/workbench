const express = require("express");
const logger = require('./logger');
const app = express();
const Joi = require('joi');

// app.use(express.json());

app.use(logger);


const sex = [
  { id: 1, name: "pussy" },
  { id: 2, name: "dick" },
  { id: 3, name: "ass" }
];
const chick ={
  name : 'kokoro',
  ass: "nice",
  pussy: "tasty"
}
app.get("/", (req, res) => {
  const { pussy } = chick;
  console.log(pussy); 
  res.send("juicy pussy");

});

app.get("/sex", (req, res) => {
  res.send(sex);
});

app.post("/sex", (req, res) => {
  const {error} = validateStyle(req.body);
  if(error) return res.status(400).send(error.details[0].message );


  const style = {
    id: sex.length + 1,
    name: req.body.name
  };
  sex.push(style);
  res.send(style);
});


app.put('/sex/:id', (req, res)=>{
  const style = sex.find( s => s.id === parseInt(req.params.id));
  if(!style) return res.status(404).send("404 not found, dickhead");
  const {error} = validateStyle(req.body);

  if(error) return res.status(400).send(error.details[0].message );

  style.name = req.body.name;
  res.send(style);
})


function validateStyle(style){
  const schema = {
    name: Joi.string().min(2).required()
  }
  return Joi.validate(style , schema);
}


app.get("/sex/:id", (req, res) => {
  const style = sex.find(s => s.id === parseInt(req.params.id));
  if (!style) return res.status(404).send("404 not found, thickie");
  res.send(style);
});


app.delete("/sex/:id", (req, res)=>{
  const style = sex.find(s => s.id === parseInt(req.params.id));
  if(!style) return res.status(404).send('404 not found, asshole');

  const index = sex.indexOf(style);
  sex.splice(index, 1);
  res.send(style);
})

const port = process.env.PORT || 1919;
app.listen(port, () => console.log(`${port} is dripping wet`));


