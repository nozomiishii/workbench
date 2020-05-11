import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([68, 3, -5, 0]);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
