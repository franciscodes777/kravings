import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAdP7B4Na4bJowNBUYnQMYj4ibVK4yChZo",
  authDomain: "kravings-cd496.firebaseapp.com",
  projectId: "kravings-cd496",
  storageBucket: "kravings-cd496.firebasestorage.app",
  messagingSenderId: "481766684516",
  appId: "1:481766684516:web:e4f4109f5aac3bef936c71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export {db}