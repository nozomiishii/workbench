console.log("destructuring");

const book = {
  title: "ego is jerkoff",
  auther: "tempting bitch",
  publisher: {
    name: "doggy"
  }
};

const { name: publisherName = "lipussy" } = book.publisher;
console.log(publisherName);

const item = ["flatwhite", "$3.80", "$4.20", "$4.80"];
const [coffee, s, m, l] = item;

console.log(`${coffee} is ${s}`);
