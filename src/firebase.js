// Replace with your config
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBdZQvFrqsSmohjOLveZ9lTuczNVryX4pA",
  authDomain: "tourist-website-c9306.firebaseapp.com",
  projectId: "tourist-website-c9306",
  storageBucket: "tourist-website-c9306.firebasestorage.app",
  messagingSenderId: "G-DHQ9VLYZCL",
  appId: "1:872411490681:web:00e7327d80ffbfe9e7e7a8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
