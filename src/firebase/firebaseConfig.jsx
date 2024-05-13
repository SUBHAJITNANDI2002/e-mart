
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7J1chLvOU-48xyWit0oi_gJeAIB_klZU",
  authDomain: "e-mart-a1b26.firebaseapp.com",
  projectId: "e-mart-a1b26",
  storageBucket: "e-mart-a1b26.appspot.com",
  messagingSenderId: "108165753418",
  appId: "1:108165753418:web:4cb76bba6f33768f76d4b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);
export {fireDB,auth}