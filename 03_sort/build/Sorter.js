"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
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
class Sorter {
    sort() {
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
exports.Sorter = Sorter;
