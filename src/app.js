class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hi, I am ${this.name} and ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.name = major;
  }
  hasMajor() {
    return this.major;
  }
}

class Traveler extends Person {
  constructor(name, location = "tokyo") {
    super(name);
    this.location = location;
  }
  greeting() {
    console.log("work");
    let discription = super.greeting();
    if (this.location) {
      discription += ` from ${this.location}`;
    }
    return discription;
  }
}

const nozomi = new Traveler("nozomi");

console.log(nozomi.greeting());
