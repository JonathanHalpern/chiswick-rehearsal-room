import admin from 'firebase-admin';

const serviceAccount = require('./polling-app-88df9-firebase-adminsdk-ze140-38b98b0911.json');

const config = {
  apiKey: 'AIzaSyBHe3URdyc5xA_EODBULvZeryEOkJ1BIuE',
  authDomain: 'polling-app-88df9.firebaseapp.com',
  databaseURL: 'https://polling-app-88df9.firebaseio.com',
  projectId: 'polling-app-88df9',
  storageBucket: 'polling-app-88df9.appspot.com',
  messagingSenderId: '968428564609',
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://polling-app-88df9.firebaseio.com',
});

export function handler(event, context, callback) {
  // const db = admin.firestore();
  // const getUser = uid => admin.auth().getUser(uid);

  return admin
    .auth()
    .getUser('fDcblzwrrLgXhv5HEgEzChu1vl73')
    .then(userRecord => {
      console.log(userRecord);
      const db = admin.firestore();
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ userRecord }),
      });
    });
}
