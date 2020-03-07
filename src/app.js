// import "./utils.js";
import subtract, { square, add } from "./utils.js";
import isSenior, { isAdult, canDrink } from "./person.js";

console.log("app.js is running!");
console.log(square(5));
console.log(add(5, 4));
console.log(subtract(5, 4));

console.log("isAdult", isAdult(14));
console.log("canDrink", canDrink(20));
console.log("isSenior", isSenior(70));
