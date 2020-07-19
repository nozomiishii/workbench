const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.floor(Math.random() * 100);
  console.log(number);
  res.send(number.toString());
});
exports.toTheDojo = functions.https.onRequest((req, res) => {
  res.redirect('https://www.nozomiishii.jp');
});
exports.handler = (req, res) => {
  res.set({ 'Access-Control-Allow-Origin': '*' }).sendStatus(200);
};
// callable functions
exports.sayHello = functions.https.onCall((data, context) => {
  return `hello, ninjas`;
});
//# sourceMappingURL=index.js.map
