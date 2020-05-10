class Vehicle {
  constructor(public color: string) {}
  drive(): void {
    console.log("chugga chugga");
  }
}

const vehicle = new Vehicle("red");
console.log(vehicle.color);

// class Car extends Vehicle {}

// const car = new Car();
// car.drive();
