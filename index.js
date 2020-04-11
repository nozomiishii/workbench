const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("title: " + argv.title);
    console.log("body: " + argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a new note",
  handler: function () {
    console.log("removeing a new note");
  },
});

yargs.command({
  command: "read",
  describe: "read a new note",
  handler: function () {
    console.log("reading a new note");
  },
});

yargs.command({
  command: "list",
  describe: "list a new note",
  handler: function () {
    console.log("listing a new note");
  },
});

// console.log(yargs.argv);
yargs.parse();
