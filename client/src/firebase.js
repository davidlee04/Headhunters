import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIvQxGR9d6C33ho4oKM-_ephrRusl-yP4",
  authDomain: "headhunters2-ba5a2.firebaseapp.com",
  projectId: "headhunters2-ba5a2",
  storageBucket: "headhunters2-ba5a2.appspot.com",
  messagingSenderId: "1078207664176",
  appId: "1:1078207664176:web:4009cb91ccbcd48a301df5",
  measurementId: "G-FSLZPVL0QS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
