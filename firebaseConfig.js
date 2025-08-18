// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz3rHXsU7GiXrI6oJpGZ-RImUwRJNh0rk",
  authDomain: "wdaccelerateecom.firebaseapp.com",
  projectId: "wdaccelerateecom",
  storageBucket: "wdaccelerateecom.firebasestorage.app",
  messagingSenderId: "531779213806",
  appId: "1:531779213806:web:8f403ce4b2d3bb13a296ff",
  measurementId: "G-PHY45155G1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app