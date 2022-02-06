let apples: number = 5;
apples = 10;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "ornage"];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let turths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const longNumber: (i: number) => void = (i) => {
  console.log(i);
};

// When to user annotations
// 1) Functions that returns the 'any' type
const josn = '{"x": 10, "y":20}';
const coordinates = JSON.parse(josn);
console.log(coordinates); // { x: 10, y: 20 }

// 2) When we declare a variable on line
// and initalizate it later
let words = ["red", "green", "blue"];
let foundWord: boolean = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred conrrectly
let numbers = [-10, 1, 12];
let numberAboveZero: boolean | number = false;
for (const number of numbers) {
  if (number > 0) {
    numberAboveZero = number;
  }
}
