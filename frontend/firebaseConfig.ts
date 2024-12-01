// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALoAeQROiB5SoQHFDm8_2Uv5AuKnn2fy8",
  authDomain: "myownproject-58fd8.firebaseapp.com",
  projectId: "myownproject-58fd8",
  storageBucket: "myownproject-58fd8.firebasestorage.app",
  messagingSenderId: "816638628764",
  appId: "1:816638628764:web:9a266a3e703098d649ae59",
  measurementId: "G-SW688TCMWV",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Analytics (optional: check for browser compatibility)
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
