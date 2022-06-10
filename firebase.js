import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAKXV60_CBMAty02McnKhLdMQAUdF6YQ7M',
  authDomain: 'clone-44b16.firebaseapp.com',
  projectId: 'clone-44b16',
  storageBucket: 'clone-44b16.appspot.com',
  messagingSenderId: '557403028936',
  appId: '1:557403028936:web:d873c0b4959d1c512c54fd',
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;
