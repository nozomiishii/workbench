//

class Car {
  drive() {
    console.log("Driving....");
  }
}

class Truck {
  drive() {
    console.log("Driving a track...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);

const button = document.querySelector("button");

// const input = <HTMLInputElement>document.getElementById("user-input")!;
const input = document.getElementById("user-input")! as HTMLInputElement;

input.value = "hey";

const fetchedUserData = {
  id: "u1",
  name: "nozomi",
  job: { title: "ceo", description: "my company" },
};

console.log(fetchedUserData?.job?.title);

const nozomi = {
  age: 29,
};

console.log(nozomi);
