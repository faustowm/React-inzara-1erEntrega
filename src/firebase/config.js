
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC_ciuAMDKvPZRAh-o9A9EAaOq0el7lKqs",
  authDomain: "inzaraaromas.firebaseapp.com",
  projectId: "inzaraaromas",
  storageBucket: "inzaraaromas.appspot.com",
  messagingSenderId: "695842940318",
  appId: "1:695842940318:web:98a32ce0ac49bcbe2ee28f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);