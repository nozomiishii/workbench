// const multiply = () => {
//   const newArray = this.numbers.map(number => {
//     return number * this.multiplyBy;
//   });
//   return newArray;
// };
let multiply;

const multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 3,
  multiply: function() {
    const newArray = this.numbers.map(number => {
      return number * this.multiplyBy;
    });
    return newArray;
  }
};

console.log(multiplier.multiply());
