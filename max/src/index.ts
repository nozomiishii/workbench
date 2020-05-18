function Logger(logString: string) {
  return function (target: object) {
    console.log(logString);
    console.log(target);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("outer template");
  return function <T extends { new (...args: any[]): { name: string } }>(
    target: T
  ) {
    return class extends target {
      constructor(...args: any[]) {
        super();
        console.log("inner template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
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

//----

// function Log(target: object, key: string | Symbol) {
//   console.log("Property decorator");
//   console.log(target, key);
// }

// function Log2(target: object, key: string, desc: PropertyDescriptor) {
//   console.log("accessor decorator");
//   console.log(target);
//   console.log(key);
//   console.log(desc);
// }

// function Log3(target: object, key: string, desc: PropertyDescriptor) {
//   console.log("Method decorator");
//   console.log(target);
//   console.log(key);
//   console.log(desc);
// }

// function Log4(target: object, key: string, position: number) {
//   console.log("Paramater decorator");
//   console.log(target);
//   console.log(key);
//   console.log(position);
// }

// class Product {
//   @Log
//   title: string;
//   private _price: number;

//   @Log2
//   set price(val: number) {
//     if (val > 0) {
//       this._price = val;
//     } else {
//       throw new Error("Invalid price - should be positive!");
//     }
//   }

//   constructor(t: string, p: number) {
//     this.title = t;
//     this._price = p;
//   }

//   @Log3
//   getPriceWithTax(@Log4 tax: number) {
//     return this._price * (1 + tax);
//   }
// }

// const book1 = new Product("book1", 50);
// const book2 = new Product("book2", 10 0);
