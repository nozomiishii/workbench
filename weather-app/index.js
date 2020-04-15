const geocode = require("./geocode");
const forcast = require("./forcast");

const location = process.argv[2];

console.log(location);

if (!location) {
  console.log("please provide an address");
} else {
  geocode(location, (error, { longitude, latitude }) => {
    if (error) {
      return console.error(error);
    }
    forcast(longitude, latitude, (error, response) => {
      if (error) {
        return console.error(error);
      }
      console.log(response);
    });
  });
}
