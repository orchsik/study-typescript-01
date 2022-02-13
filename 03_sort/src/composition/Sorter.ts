interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  sort(collection: Sortable) {
    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < collection.length - 1 - i; j++) {
        if (collection.compare(j, j + 1)) {
          collection.swap(j, j + 1);
        }
      }
    }
  }
}
