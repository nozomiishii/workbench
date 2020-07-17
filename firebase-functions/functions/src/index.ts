const functions = require('firebase-functions');

exports.randomNumber = functions.https.onRequest((req: any, res: any) => {
  const number = Math.floor(Math.random() * 100);
  console.log(number);
  res.send(number.toString());
});

exports.toTheDojo = functions.https.onRequest((req: any, res: any) => {
  res.redirect('https://www.nozomiishii.jp');
});

// callable functions
exports.sayHello = functions.https.onCall((data: any, context: any) => {
  return `hello, ninjas`;
});
