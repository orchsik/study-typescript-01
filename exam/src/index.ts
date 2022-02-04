import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";

const charactersCollection = new CharactersCollection("eDcBa");
charactersCollection.sort();
console.log(charactersCollection.collection);

const numbersCollection = new NumbersCollection([3, 0, 100, -2]);
numbersCollection.sort();
console.log(numbersCollection.collection);
