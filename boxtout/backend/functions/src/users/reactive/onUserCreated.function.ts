import * as functions from 'firebase-functions';

exports.onUserCreated = functions.firestore
  .document('users/{userId}')
  .onCreate((userSnapshot, context) => {
    const data = userSnapshot.data();
    console.log(`User created | send an email to ${data.email}`);
  });