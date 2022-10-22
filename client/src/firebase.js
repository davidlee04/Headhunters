import { initializeApp } from 'firebase/app';
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHmKmTRi0AySI_ffmJOoojmcsDJ4BMOvs",
    authDomain: "headhunters-74d27.firebaseapp.com",
    databaseURL: "https://headhunters-74d27-default-rtdb.firebaseio.com",
    projectId: "headhunters-74d27",
    storageBucket: "headhunters-74d27.appspot.com",
    messagingSenderId: "761276865839",
    appId: "1:761276865839:web:39a6f7a9de39b6794515da",
    measurementId: "G-8LKY24ZQZ0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);