// NOTHING TO DO WITH GENERICS
const addOne = (a: number): number => {
  return a + 1;
};
const addTwo = (a: number): number => {
  return a + 2;
};
const addThree = (a: number): number => {
  return a + 3;
};
// 더할 값을 변수로 주면 함수 하나로 됩니다.
const add = (a: number, b: number): number => {
  return a + b;
};

// genereic 찍먹
class HoldNumber {
  data: number | undefined;
}
class HoldString {
  data: string | undefined;
}
const holdNumber = new HoldNumber();
holdNumber.data = 123;
const holdString = new HoldString();
holdString.data = "show me the money";

// generic 사용 - data 타입을 변수처럼 주면 클래스 하나로 됩니다.
class HoldAnything<T> {
  data: T | undefined;
  add(a: T): T {
    return a;
  }
}
const holdNumber2 = new HoldAnything<number>();
holdNumber2.data = 321;
holdNumber2.add(10);
const holdString2 = new HoldAnything<string>();
holdString2.data = "black sheep well";
