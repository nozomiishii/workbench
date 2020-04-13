const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=4534b4c0d66c943670b34e593e5a0d90&query=Tokyo";

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.temperature);
});
