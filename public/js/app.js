console.log("hi from front js");

const form = document.querySelector("form");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.location.value);
  // const address = `&query=${e.target.location.value}`;
  // const api =
  //   "http://api.weatherstack.com/current?access_key=4534b4c0d66c943670b34e593e5a0d90";

  const address = `?address=${e.target.location.value}`;
  const api = `/weather`;

  const url = api + address;
  message.textContent = "loading...";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        message.textContent = `${data.error}`;
      } else {
        message.textContent = `${data.name}, tempertuer:${data.temperture}`;
      }
    });
});
