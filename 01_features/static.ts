class Person {
  age = 28;
  birthday() {
    this.age += 1;
    console.log({ age: this.age });
  }
}

const p1 = new Person();
p1.birthday();
