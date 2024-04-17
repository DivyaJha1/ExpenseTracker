// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_RGpcwL0Mm43vAM_lyY6dF8wiUL1zPJg",
  authDomain: "ans1-70635.firebaseapp.com",
  projectId: "ans1-70635",
  storageBucket: "ans1-70635.appspot.com",
  messagingSenderId: "653935253718",
  appId: "1:653935253718:web:e02442ac9ad554c3dd9177",
  measurementId: "G-FQDQB7394R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
//Export the reference to be used in other files
const db = getFirestore(app);

/**const firebaseConfig = {
  apiKey: "*********************************",
  authDomain: "*******************************",
  projectId: "***********************",
  storageBucket: "******************************",
  messagingSenderId: "******************",
  appId: "************************"
}; */
export {db};