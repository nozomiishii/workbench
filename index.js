var array = [1, 2, 3];
// var array2 = [];
// array.forEach( function( value ) {
// 　　　　　var temp = value * 2;
// 　　　　　array2.push( temp );   
// })

// console.log("foreach: ",  array );
// console.log("foreach: ",  array2 );

const array2 = array.map( function( value ) {
  　　　　return value * 2;
  　　　　　
  })

console.log("map: ",  array );
console.log("map: ",  array2 );
