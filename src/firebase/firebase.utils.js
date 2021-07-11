import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAL6Uc4k0u7L7RskbQmMM-Q7pTvIsEoS60",
  authDomain: "react-crwn-clothing-b3474.firebaseapp.com",
  projectId: "react-crwn-clothing-b3474",
  storageBucket: "react-crwn-clothing-b3474.appspot.com",
  messagingSenderId: "1030442509739",
  appId: "1:1030442509739:web:05d8f92ad9f6263d3a1eee",
  measurementId: "G-S66ENDTV53"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
