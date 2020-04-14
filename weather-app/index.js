const geocode = require("./geocode");
const weatherApi = require("./weatherApi");

geocode("tokyo", (error, response) => {
  if (error) {
    return console.error(error);
  }
  console.log(response);
  const { longitude, latitude } = response;
  weatherApi(longitude, latitude, (error, response) => {
    if (error) {
      return console.error(error);
    }
    console.log(response);
  });
});
