import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCKvT8JhAcflOThchIl2OOloGg_QRkDuk8",
  authDomain: "nextjs-a6365.firebaseapp.com",
  projectId: "nextjs-a6365",
  storageBucket: "nextjs-a6365.appspot.com",
  messagingSenderId: "921010365847",
  appId: "1:921010365847:web:eb209b60d9e1eac90f10d2"
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const auth = app.auth();
export default auth;