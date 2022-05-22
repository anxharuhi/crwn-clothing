// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';  

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQyMCwavKSOBlT9BHLAS5u1jZwMKFm2Eo",
  authDomain: "crwn-clothing-project-db.firebaseapp.com",
  projectId: "crwn-clothing-project-db",
  storageBucket: "crwn-clothing-project-db.appspot.com",
  messagingSenderId: "142134654430",
  appId: "1:142134654430:web:6cab4fa64228e24978594f"
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const firestoreDB = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(firestoreDB, 'users', userAuth.uid);
  console.log('Firebase response: ', userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log('Exists?: ', userSnapshot.exists());
  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, email, createdAt
      });
    } catch (error) {
      console.log('User creation error, ', error.message)
    }
  }
  return userDocRef
}