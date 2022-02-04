import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const charactersCollection = new CharactersCollection("eDcBa");
const sorter1 = new Sorter(charactersCollection);
sorter1.sort();
console.log(charactersCollection.collection);

const numbersCollection = new NumbersCollection([3, 0, 100, -2]);
const sorter2 = new Sorter(numbersCollection);
sorter2.sort();
console.log(numbersCollection.collection);
