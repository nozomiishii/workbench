const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=4534b4c0d66c943670b34e593e5a0d90&query=Tokyo";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log(error);
  } else if (response.body.error) {
    console.log(response.body.error);
  } else {
    const { temperature } = response.body.current;
    console.log(temperature);
  }
});

// const map_access_token =
//   "pk.eyJ1Ijoibm96b21paXNoaWkiLCJhIjoiY2s4eWk3Ym5sMThkZzNscnJoeXl5Z2Z6byJ9.EXjlhgl-G3RR3vO2rcXlAw";

// const url =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoibm96b21paXNoaWkiLCJhIjoiY2s4eWk3Ym5sMThkZzNscnJoeXl5Z2Z6byJ9.EXjlhgl-G3RR3vO2rcXlAw";

// request({ url: url, json: true }, (error, response) => {
//   const longitude = response.body.features[0].center[0];
//   const latitude = response.body.features[0].center[1];
//   console.log("longitude:", longitude);
//   console.log("latitude:", latitude);
// });
