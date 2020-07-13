const functions = require('firebase-functions');

exports.randomNumber = functions.https.onRequest((req: any, res: any) => {
  const number = Math.round(Math.random() * 100);
  res.send(number.toString());
});

exports.toTheDojo = functions.https.onRequest((req: any, res: any) => {
  res.redirect('https://www.nozomiishii.jp');
});
