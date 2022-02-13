import { Sorter } from "./Sorter";

export class NumbersCollection {
  static buildWithSort(collection: number[]) {
    return new NumbersCollection(collection, new Sorter());
  }

  constructor(public collection: number[], public sorter: Sorter) {}

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftHand = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftHand;
  }

  sort() {
    this.sorter.sort(this);
  }

  print() {
    console.log(this.collection);
  }
}
