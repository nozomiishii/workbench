const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on("message", ()=> console.log('message'));

console.log(emitter);
emitter.emit("message");
