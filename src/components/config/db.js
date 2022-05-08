
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfV15Dyuo0yFlebsRliuJ2NgGoLHl8Oew",
  authDomain: "react-fb-auth-c7fb5.firebaseapp.com",
  projectId: "react-fb-auth-c7fb5",
  storageBucket: "react-fb-auth-c7fb5.appspot.com",
  messagingSenderId: "712710115638",
  appId: "1:712710115638:web:d3a8df174410a3bd052397"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();