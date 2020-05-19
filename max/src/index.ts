// function Logger(logString: string) {
//   return function (target: object) {
//     console.log(logString);
//     console.log(target);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("outer template");
//   return function <T extends { new (...args: any[]): { name: string } }>(
//     target: T
//   ) {
//     return class extends target {
//       constructor(...args: any[]) {
//         super();
//         console.log("inner template");
//         const hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector("h1")!.textContent = this.name;
//         }
//       }
//     };
//   };
// }

// @Logger("LOGGING - Person")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name: string;
//   constructor() {
//     this.name = "nozomi";
//   }
// }

// const nozomi = new Person();

// console.log(nozomi);

function Log(target: object, key: string | Symbol) {
  console.log("Property decorator");
  console.log(target, key);
}

function Log2(target: object, key: string, desc: PropertyDescriptor) {
  console.log("accessor decorator");
  console.log(target);
  console.log(key);
  console.log(desc);
}

function Log3(target: object, key: string, desc: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target);
  console.log(key);
  console.log(desc);
}

function Log4(target: object, key: string, position: number) {
  console.log("Paramater decorator");
  console.log(target);
  console.log(key);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const book1 = new Product("book1", 50);
const book2 = new Product("book2", 100);

function Autobind(target: object, key: string, desc: PropertyDescriptor) {
  const targetMethod = desc.value;
  const newMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const fn = targetMethod.bind(this);
      return fn;
    },
  };
  return newMethod;
}

class Printer {
  message = "This works!";
  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button") as HTMLButtonElement;
button.addEventListener("click", p.showMessage);

//----

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[];
  };
}

const resisteredValidator: ValidatorConfig = {};

function Required(target: object, key: string) {
  resisteredValidator[target.constructor.name] = {
    [key]: ["required"],
  };
}

function PositiveNumber(target: object, key: string) {
  resisteredValidator[target.constructor.name] = {
    [key]: ["positive"],
  };
}

function validate(target: any, key: string) {
  const objValidatorConfig = resisteredValidator[target.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  for (const prop in objValidatorConfig) {
    for (const validator in objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          return !!target[prop];
        case "positive":
          return target[prop] > 0;
      }
    }
  }
}

class Course {
  title: string;
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseform = document.querySelector("form") as HTMLFormElement;

courseform.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createCourse = new Course(title, price);
  console.log(createCourse);
});
