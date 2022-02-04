import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public collection: string) {
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.collection.split("");
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.collection = characters.join("");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.collection[leftIndex].toLowerCase() >
      this.collection[rightIndex].toLowerCase()
    );
  }
}
