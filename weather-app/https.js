const http = require("http");
const url =
  "http://api.weatherstack.com/current?access_key=4534b4c0d66c943670b34e593e5a0d90&query=Tokyo";

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.error(error);
});

request.end();
