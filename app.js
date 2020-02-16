const chalk = require('chalk');
const getNote = require('./note.js')
const yargs = require('yargs');

const keyValue = process.argv[2];

// console.log(process.argv);

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'note title'
    }
  },
  handler: function(argv){
    console.log('adding new note')
  }
})

yargs.command({
  command: 'remove',
  describe: 'remove the note',
  handler: function(){
    console.log('removeing the note')
  }
})

yargs.command({
  command: 'list',
  describe: 'listing the note',
  handler: function(){
    console.log('here is the note list')
  }
})

yargs.command({
  command: 'read',
  describe: 'reading note',
  handler: function(){
    console.log('16th feb, i just saw a pussy. it was rad')
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
