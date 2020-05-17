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
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
