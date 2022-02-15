import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const charactersCollection = new CharactersCollection("eDcBa");
charactersCollection.sort();
console.log(charactersCollection.collection);

const numbersCollection = new NumbersCollection([3, 0, 100, -2]);
numbersCollection.sort();
console.log(numbersCollection.collection);

/**
 * 정렬 팩토리 함수
 */
const sort = (collection: any) => {
  switch (typeof collection[0]) {
    case "number":
      new NumbersCollection(collection).sort();
      break;
    case "string":
      new CharactersCollection(collection).sort();
      break;
    default:
      throw new Error("정렬을 지원하지 않는 타입 입니다.");
  }
};
sort([3, 0, 100, -2]);
