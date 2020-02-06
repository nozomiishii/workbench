const os = require("os");

let total = os.totalmem();
let free = os.freemem();

console.log(`total: ${total}`);
console.log(`free: ${free}`);
