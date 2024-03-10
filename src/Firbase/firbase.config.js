// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwMhoDqXabYnycNb1ezmya8IG6U0k3Gyk",
  authDomain: "dragon-news-1c80a.firebaseapp.com",
  projectId: "dragon-news-1c80a",
  storageBucket: "dragon-news-1c80a.appspot.com",
  messagingSenderId: "1095060340126",
  appId: "1:1095060340126:web:cd35c9d1154d25690b6a8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;