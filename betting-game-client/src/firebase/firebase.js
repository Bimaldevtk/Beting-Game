
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTeVJ8A2hM1tOMaMHjCfnR0jIbIeKziFQ",
  authDomain: "bet-game-d9f8c.firebaseapp.com",
  projectId: "bet-game-d9f8c",
  storageBucket: "bet-game-d9f8c.appspot.com",
  messagingSenderId: "17803810972",
  appId: "1:17803810972:web:c345bbf0df6ae5ef613559",
  measurementId: "G-WW5ENH2EGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {app, auth};