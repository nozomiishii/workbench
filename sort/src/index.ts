import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([698, 3, -5, 0]);
numbersCollection.sort();
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("fkeaRhuAFri");
// const sorter = new Sorter(charactersCollection);
charactersCollection.sort();
console.log(charactersCollection.data);
