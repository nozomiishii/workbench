const request = require("request");

const geocode = (address, callback) => {
  const api = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const access_token =
    "?access_token=pk.eyJ1Ijoibm96b21paXNoaWkiLCJhIjoiY2s4eWk3Ym5sMThkZzNscnJoeXl5Z2Z6byJ9.EXjlhgl-G3RR3vO2rcXlAw";

  const url = api + encodeURIComponent(address) + ".json" + access_token;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location service", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location. try another search.", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
      });
    }
  });
};

module.exports = geocode;
