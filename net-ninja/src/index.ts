const ancher = document.querySelector("a")!;

console.log(ancher.href);

const form = document.getElementById("form-btn") as HTMLFontElement;
// const form = document.querySelector('form')

const btn = document.querySelector("form-btn") as HTMLButtonElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
});
