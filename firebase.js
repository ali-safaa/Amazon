import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDeZyubyDedSWSW4W9_ELP2QbJCaEPvph8',
  authDomain: 'clone-next-c6ef1.firebaseapp.com',
  projectId: 'clone-next-c6ef1',
  storageBucket: 'clone-next-c6ef1.appspot.com',
  messagingSenderId: '744104359394',
  appId: '1:744104359394:web:06b528344517d4fecf35bb',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export { app };
