var Person = /** @class */ (function () {
    function Person() {
        this.age = 28;
    }
    Person.prototype.birthday = function () {
        this.age += 1;
        console.log({ age: this.age });
    };
    return Person;
}());
var p1 = new Person();
p1.birthday();
