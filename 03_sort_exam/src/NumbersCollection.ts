import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public collection: number[]) {
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.collection[leftIndex];
    this.collection[leftIndex] = this.collection[rightIndex];
    this.collection[rightIndex] = leftHand;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }
}
