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
  }

  get bookings() {
    return this.store.collection('bookings');
  }
}

export default new Firebase();
