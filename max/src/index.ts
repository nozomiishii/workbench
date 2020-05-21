const form = document.querySelector("form") as HTMLFormElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log("object");
});
