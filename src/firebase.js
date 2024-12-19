// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDrNddgYL1pJEUYFAzeM79r0DmhiN-QfyQ",
  authDomain: "naukri-85337.firebaseapp.com",
  projectId: "naukri-85337",
  storageBucket: "naukri-85337.firebasestorage.app",
  messagingSenderId: "2949862886",
  appId: "1:2949862886:web:27d57cc7ba283a711e7227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}