import { Sorter } from "./Sorter";

const sorter = new Sorter([3, 0, 100, -2]);
// const sorter = new Sorter("cba");
sorter.sort();
console.log(sorter.collection);
