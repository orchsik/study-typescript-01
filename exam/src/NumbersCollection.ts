export class NumbersCollection {
  constructor(public collection: number[]) {}

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
