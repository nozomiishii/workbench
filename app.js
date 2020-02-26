function sing(callback){
  console.log('lalala');
  if(callback){
    callback();
  }
}

function meow(){
  console.log('meow meow');
}

const bow = "bow bow";

console.log(sing(meow));
// console.log(sing(bow));
