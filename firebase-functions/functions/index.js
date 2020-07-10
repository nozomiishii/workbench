const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.newUserSignup = functions.auth.user().onCreate((user) => {
  console.log('user created', user.email, user.uid);
  return admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
  console.log('user deleted', user.email, user.uid);
  const doc = admin.firestore().collection('users').doc(user.uid);
  return doc.delete();
});

// adding request
exports.addRequest = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'only authenticated users can add requests'
    );
  }
  if (data.text.length > 30) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'request must be no more than 30 characters long'
    );
  }
  return admin.firestore().collection('requests').add({
    text: data.text,
    upvates: 0,
  });
});
