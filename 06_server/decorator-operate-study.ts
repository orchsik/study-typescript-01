import "reflect-metadata";

function classdesc() {
  console.log("classdesc(): factory evaluated");
  return function (target: any) {
    console.log("classdesc(): called");
    console.log({
      target,
      "target.prototype": target.prototype,
    });

    for (let key in target.prototype) {
      const targetPrototype = target.prototype[key];
      console.log({ key, prototype: targetPrototype });

      const metaValue = Reflect.getMetadata("metaKey", target.prototype, key);
      console.log({ metaValue });
    }
  };
}

function funcdesc() {
  console.log("funcdesc(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("funcdesc(): called");
    console.log({
      target,
      "target.prototype": target.prototype,
      propertyKey,
      descriptor,
    });
    Reflect.defineMetadata("metaKey", "metaValue", target, propertyKey);
  };
}

@classdesc()
class Idol {
  @funcdesc()
  callmyname() {
    console.log("method is called");
  }
}

const idol = new Idol();
idol.callmyname();

export {};
