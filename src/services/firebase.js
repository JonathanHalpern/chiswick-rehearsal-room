// ./src/services/firebase.js
import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCJgpYy5ndPimmdf9e__7_08BI8Ks7MIvI',
  authDomain: 'chiswick-rehearsal-room.firebaseapp.com',
  databaseURL: 'https://chiswick-rehearsal-room.firebaseio.com',
  projectId: 'chiswick-rehearsal-room',
  storageBucket: 'chiswick-rehearsal-room.appspot.com',
  messagingSenderId: '283111326730',
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore();
    const settings = { /* your settings... */ timestampsInSnapshots: true };
    this.store.settings(settings);
    this.storage = firebase.storage;
    this.auth = firebase.auth;
    this._messaging = firebase.messaging;
  }

  get bookings() {
    return this.store.collection('bookings');
  }

  get messaging() {
    return this._messaging();
  }

  get images() {
    return this.storage()
      .ref()
      .child('images');
  }
}

export default new Firebase();
