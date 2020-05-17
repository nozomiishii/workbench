interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1;

user1 = {
  name: "max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("hey");
