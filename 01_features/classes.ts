class Vehicle {
  constructor(public color: string = "red") {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
console.log(vehicle);

class Car extends Vehicle {
  constructor(public wheels: number = 4, public color: string = "rainbow") {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess() {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
console.log(car);
