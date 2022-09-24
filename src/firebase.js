// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";

// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAyBSzRr1E3fAyCNiLj2Vq_iCqtMSY9vs",
  authDomain: "challenge-6fb33.firebaseapp.com",
  projectId: "challenge-6fb33",
  storageBucket: "challenge-6fb33.appspot.com",
  messagingSenderId: "694893613233",
  appId: "1:694893613233:web:b5e1588bc725a299959290",
  measurementId: "G-SQX9ZWR0HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


export { auth };
