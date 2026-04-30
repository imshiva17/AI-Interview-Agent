import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-3ac55.firebaseapp.com",
  projectId: "interviewiq-3ac55",
  storageBucket: "interviewiq-3ac55.firebasestorage.app",
  messagingSenderId: "529410563584",
  appId: "1:529410563584:web:f35b5be9bf17cf5f1482e5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };
