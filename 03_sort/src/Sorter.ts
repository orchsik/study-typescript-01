/**
 * [Interface]
 * Sets up contract between different classes
 * Use when we have very diffrent objects that we want to work together
 * Promotes loose coupling
 */
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

/**
 * [Abstract Classes]
 * Sets up contract between different classes
 * Use when we are trying to build a definition of an object
 * Strongly couples class together
 * 
 * Cant'be used to create an object directly
 * Only used as parent class
 * Can contain real implementation for some methods
 * The implemented methods can refer to other methods that don't actually exist yet
   (we still have to prove names and types for the un-implemented methods) 
 * Can make child classes peromise to implement some other method
 */
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
