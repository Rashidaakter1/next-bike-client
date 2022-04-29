// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzv8Nn8IUCydJStXR_PXT7t_GMbLcwy-E",
  authDomain: "nextbike-204d0.firebaseapp.com",
  projectId: "nextbike-204d0",
  storageBucket: "nextbike-204d0.appspot.com",
  messagingSenderId: "1015601035332",
  appId: "1:1015601035332:web:bf30d646a13da8fa14e411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;