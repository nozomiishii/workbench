import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work on mario website", 250);
let Invoices: Invoice[] = [];

const ancher = document.querySelector("a")!;

console.log(ancher.href);

const form = document.querySelector("form") as HTMLFormElement;
// const form = document.querySelector('form')

const btn = document.querySelector("form-btn") as HTMLButtonElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
