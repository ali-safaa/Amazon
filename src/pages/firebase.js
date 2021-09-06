import firebase from "firebase";
import { defaultConfig } from "next/dist/server/config-shared";

const firebaseConfig = {
  apiKey: "AIzaSyAwKEGp21d3gFFeZc49-zHLYweaWHgpxFs",
  authDomain: "clone-d5204.firebaseapp.com",
  projectId: "clone-d5204",
  storageBucket: "clone-d5204.appspot.com",
  messagingSenderId: "183245690970",
  appId: "1:183245690970:web:547c9aab4b1eac53906063",
  measurementId: "G-0YZLZTC27R"
};
if(!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
};

export default firebase;