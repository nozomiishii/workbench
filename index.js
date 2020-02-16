const chalk = require('chalk');
const getNote = require('./note.js')
const yargs = require('yargs');

const keyValue = process.argv[2];

// console.log(process.argv);

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  hander: function(){
    console.log('adding new note')
  }
})

console.log(yargs.argv);


// if(keyValue === "add"){
//   console.log('adding note');
// } else if(keyValue === 'remove'){
//   console.log('removing note');
// } else {
//   console.error(`${keyValue} is undefined...`);
// }
