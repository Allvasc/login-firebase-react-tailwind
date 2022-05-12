// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp5RFZrtuuQaitdUdEumcb5A3XVRowZ0g",
  authDomain: "login-firebase-react-tailwind.firebaseapp.com",
  projectId: "login-firebase-react-tailwind",
  storageBucket: "login-firebase-react-tailwind.appspot.com",
  messagingSenderId: "168191817738",
  appId: "1:168191817738:web:5c8cd07b8a7c99a0e787f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app