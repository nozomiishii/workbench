"use strict";

// const multiply = () => {
//   const newArray = this.numbers.map(number => {
//     return number * this.multiplyBy;
//   });
//   return newArray;
// };
var multiply = void 0;

var multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this = this;

    var newArray = this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
    return newArray;
  }
};

console.log(multiplier.multiply());
