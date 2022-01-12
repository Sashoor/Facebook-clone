import firebase from './firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-xHNyn_iTi5HBIFFZndkUNBFW672YZig",
    authDomain: "facebook-clone-3747e.firebaseapp.com",
    projectId: "facebook-clone-3747e",
    storageBucket: "facebook-clone-3747e.appspot.com",
    messagingSenderId: "1027861784188",
    appId: "1:1027861784188:web:1618b37dd099a2ee644bf9"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();

const db = app.firestor();

const storage =firebase.storage();

export {db,storage }