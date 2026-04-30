// Firebase setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1KD3II4xpP2V1MY4M2-EelW4pvUBsacU",
  authDomain: "swisa-associates1.firebaseapp.com",
  projectId: "swisa-associates1",
  storageBucket: "swisa-associates1.firebasestorage.app",
  messagingSenderId: "730305882663",
  appId: "1:730305882663:web:bfc45f64ee34b78836fc02"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
