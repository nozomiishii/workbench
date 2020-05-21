import axios from "axios";
const form = document.querySelector("form") as HTMLFormElement;
const addressInput = document.getElementById("address") as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU";

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log("object");
  const enteredAddress = addressInput.value;

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}?key=${GOOGLE_API_KEY}`
    )
    .then((response: any) => {
      const coordinates = response;
      console.log(coordinates);
    })
    .catch((err: any) => console.error(err));
});
