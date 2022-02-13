import { Sorter } from "./Sorter";

export class CharactersCollection {
  static buildWithSort(collection: string) {
    return new CharactersCollection(collection, new Sorter());
  }

  constructor(public collection: string, public sorter: Sorter) {}

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    const characters = this.collection.split("");
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.collection = characters.join("");
  }

  sort() {
    this.sorter.sort(this);
  }

  print() {
    console.log(this.collection);
  }
}
