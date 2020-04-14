const request = require("request");

const weatherApi = (longitude, latitude, callback) => {
  const api = "http://api.weatherstack.com/current";
  const access_key = "?access_key=4534b4c0d66c943670b34e593e5a0d90";
  const query = `&query=${encodeURIComponent(latitude)},${encodeURIComponent(
    longitude
  )}`;
  const url = api + access_key + query;
  console.log(url);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location service", undefined);
    } else if (response.body.error) {
      callback("unable to find location. try another search.", undefined);
    } else {
      const { temperature } = response.body.current;
      callback(undefined, temperature);
    }
  });
};

module.exports = weatherApi;
