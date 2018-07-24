// const functions = require('firebase-functions');
// const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
// const firebase = require('firebase');
const serviceAccount = require('./polling-app-88df9-firebase-adminsdk-ze140-38b98b0911.json');

// const config = {
//   apiKey: 'AIzaSyBHe3URdyc5xA_EODBULvZeryEOkJ1BIuE',
//   authDomain: 'polling-app-88df9.firebaseapp.com',
//   databaseURL: 'https://polling-app-88df9.firebaseio.com',
//   projectId: 'polling-app-88df9',
//   storageBucket: 'polling-app-88df9.appspot.com',
//   messagingSenderId: '968428564609',
// };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://polling-app-88df9.firebaseio.com',
});

const db = admin.firestore();

// const firestore = firebase.firestore().collection('users');

export function handler(event, context, callback) {
  const getUser = uid => admin.auth().getUser(uid);
  return getUser('fDcblzwrrLgXhv5HEgEzChu1vl73').then(userRecord => {
    // const docRef = db.collection('users').doc('alovelace');
    // See the UserRecord reference doc for the contents of userRecord.

    // const setAda = docRef.set({
    //   first: 'Ada',
    //   last: 'Lovelace',
    //   born: 1815,
    // });
    console.log('stuff', userRecord);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(userRecord),
    });
  });
}
//
// firebase.initializeApp(config);
// const firestore = firebase.firestore().collection('users');
// //   const settings = {/* your settings... */ timestampsInSnapshots: true};
// //   firestore.settings(settings);
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://polling-app-88df9.firebaseio.com',
// });
// // Configure the email transport using the default SMTP transport and a GMail account.
// // For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// // TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });
// const getUser = uid => admin.auth().getUser(uid);
// const users = uid =>
//   firebase
//     .firestore()
//     .collection('users')
//     .doc(uid)
//     .get();
// const notifyUser = (uid, payload) =>
//   users(uid)
//     .then(doc => {
//       const { fcmToken } = doc.data();
//       console.log('got the token', fcmToken);
//       return admin.messaging().sendToDevice([fcmToken], payload);
//     })
//     .catch(error => {
//       console.error(error);
//     });
//
// export function handler(event, context, callback) {
//   console.log(event);
//   const user = getUser('AZ6cGqrXr1WrgYhYa8wMzJQEacs2');
//   console.log(user);
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ user }),
//   });
// }
