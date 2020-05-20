import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("mario", "work on mario website", 250);
let Invoices = [];
const ancher = document.querySelector("a");
console.log(ancher.href);
const form = document.querySelector("form");
// const form = document.querySelector('form')
const btn = document.querySelector("form-btn");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
