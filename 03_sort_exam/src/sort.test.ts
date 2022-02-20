import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

describe("Sort 클래스", () => {
  it("문자열 알벳순서 정렬", () => {
    const charactersCollection = new CharactersCollection("eDcBa");
    charactersCollection.sort();

    expect(charactersCollection.collection).toEqual("aBcDe");
  });
});
