import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCJgpYy5ndPimmdf9e__7_08BI8Ks7MIvI',
  authDomain: 'chiswick-rehearsal-room.firebaseapp.com',
  databaseURL: 'https://chiswick-rehearsal-room.firebaseio.com',
  storageBucket: 'chiswick-rehearsal-room.appspot.com',
  projectId: 'chiswick-rehearsal-room',
};
firebase.initializeApp(config);

const firestore = firebase.firestore();

const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

export function handler(event, context, callback) {
  const booking = firestore.collection('bookings');
  booking.get();

  // .then(response => {
  //   console.log(response);
  // });
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: 'Hello, World!' }),
  });
}
