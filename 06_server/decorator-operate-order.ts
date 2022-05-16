function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
    console.log({
      target,
      "target.prototype": target.prototype,
      propertyKey,
      descriptor,
    });
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log({
      target,
      "target.prototype": target.prototype,
      propertyKey,
      descriptor,
    });
    console.log("second(): called");
  };
}

function third() {
  console.log("third(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log({
      target,
      "target.prototype": target.prototype,
      propertyKey,
      descriptor,
    });
    console.log("third(): called");
  };
}

class ExampleClass {
  @first()
  @second()
  @third()
  callmyname() {
    console.log("method is called");
  }
}

const example = new ExampleClass();
example.callmyname();
