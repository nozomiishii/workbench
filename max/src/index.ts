function Logger(logString: string) {
  return function (target: object) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("outer template");
  return function (target: any) {
    console.log("inner template");
    const hookEl = document.getElementById(hookId);
    const p = new target();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

@Logger("LOGGING - Person")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name: string;
  constructor() {
    this.name = "nozomi";
  }
}

const nozomi = new Person();

console.log(nozomi);
