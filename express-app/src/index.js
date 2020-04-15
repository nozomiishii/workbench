const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forcast = require("./utils/forcast");

const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "weather app",
    name: "nozomi",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about page",
    name: "nozomi ",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "you must provide address",
    });
  }

  geocode(req.query.address, (error, { longitude, latitude }) => {
    if (error) {
      return res.send({
        error: "address is invaild",
      });
    }

    forcast(latitude, latitude, (error, response) => {
      if (error) {
        return res.send({
          error: "address is invaild",
        });
      }
      res.send({
        name: req.query.address,
        temperture: response,
      });
    });
  });

  // console.log(req.query);
  // res.send({
  //   name: req.query.address,
  //   temperture: 27,
  // });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404page",
    name: "nozomi",
  });
});
app.listen("3000", () => console.log("listening 3000"));
