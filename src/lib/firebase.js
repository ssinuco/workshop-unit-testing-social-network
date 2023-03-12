// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp6FmSYdd1HXCaT3_CW9HXIrGhOyjDiu4",
  authDomain: "ssinuco-social-network.firebaseapp.com",
  projectId: "ssinuco-social-network",
  storageBucket: "ssinuco-social-network.appspot.com",
  messagingSenderId: "515800619961",
  appId: "1:515800619961:web:58f233f94484b8cc803468"
};

export const initFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return {
    app,
    auth,
    db,
  }
}

