/* import firebase from 'firebase'; */
/* import { initializeApp } from 'firebase/app';
import { getFirestore,firestore } from 'firebase/firestore'; */

import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';



const app = initializeApp({
    apiKey: "AIzaSyAhGHF2cwC6-XYeH1ApnU8vgYYX6hc5_Cc",
    authDomain: "instagram-rn-clone-4ca3b.firebaseapp.com",
    projectId: "instagram-rn-clone-4ca3b",
    storageBucket: "instagram-rn-clone-4ca3b.appspot.com",
    messagingSenderId: "31098441548",
    appId: "1:31098441548:web:7f47810436c0448e7109e9"
});

/* const db = getFirestore(app);

export default db; */

const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {auth, db};
