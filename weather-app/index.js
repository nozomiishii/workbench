const geocode = require("./geocode");

// const url =
//   "http://api.weatherstack.com/current?access_key=4534b4c0d66c943670b34e593e5a0d90&query=Tokyo";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log(error);
//   } else if (response.body.error) {
//     console.log(response.body.error);
//   } else {
//     const { temperature } = response.body.current;
//     console.log(temperature);
//   }
// });

geocode("tokyo", (error, response) => {
  if (error) {
    return console.error(error);
  }
  console.log(response);
});
