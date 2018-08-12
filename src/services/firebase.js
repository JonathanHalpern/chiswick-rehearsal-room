// ./src/services/firebase.js
import firebase from 'firebase';
import 'firebase/firestore';

const {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
} = process.env;
const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore();
    const settings = { /* your settings... */ timestampsInSnapshots: true };
    this.store.settings(settings);
    this.storage = firebase.storage;
    this.auth = firebase.auth;
  }

  get bookings() {
    return this.store.collection('bookings');
  }
}

export default new Firebase();
