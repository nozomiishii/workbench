const functions = require('firebase-functions');

exports.randomNumber = functions.https.onRequest((req, res) => {
  const number = Math.round(Math.random() * 100);
  res.send(number.toString());
});

exports.toTheNozomis = functions.https.onRequest((req, res) => {
  res.redirect('https://www.nozomiishii.jp');
});

exports.sayHello = functions.https.onCall((data, context) => {
  const name = data.name;
  return `hello, ${name}`;
});
