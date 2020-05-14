interface Person {
  name: string;
  teacher: boolean;
  hangry?: boolean;
}
let person: Person = {
  name: "Harry",
  teacher: true,
};

let person2: Person = {
  name: "Harry",
  teacher: true,
  hangry: false,
};

function greeting(name: string) {
  console.log(`Hello ${name}`);
}

greeting("youteqfq");

let str = "hello 2 u";

let age = 21;
