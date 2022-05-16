class Person {
  first = "";
  last = "";
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  run() {
    console.log("run");
  }
  attack() {
    console.log("attack");
  }
}

// var person1 = new Person("Bob", "Smith");
console.log(Person.prototype);
