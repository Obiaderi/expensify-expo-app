import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn4yFRaUTAGH3bm39qplzZmTBmMYXG1C0",
  authDomain: "expensify-77a48.firebaseapp.com",
  projectId: "expensify-77a48",
  storageBucket: "expensify-77a48.appspot.com",
  messagingSenderId: "1043120813632",
  appId: "1:1043120813632:web:e168102f45da349f1b91a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Creating trips & expenses refrences
export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");
