import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

// const numbersCollection = new NumbersCollection([100000000, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const chractersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(chractersCollection);
sorter.sort();
console.log(chractersCollection.data);
