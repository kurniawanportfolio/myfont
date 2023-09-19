// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWyWPb-lAwR4_IfOIfmge06qjZspohWg",
  authDomain: "unitygameproject-70ec8.firebaseapp.com",
  databaseURL: "https://unitygameproject-70ec8-default-rtdb.firebaseio.com",
  projectId: "unitygameproject-70ec8",
  storageBucket: "unitygameproject-70ec8.appspot.com",
  messagingSenderId: "202328000388",
  appId: "1:202328000388:web:bcb71a38f18508d1d1ffd1",
  measurementId: "G-TLL0F6EBVW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };