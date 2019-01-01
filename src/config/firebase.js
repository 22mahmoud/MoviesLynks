import React, { useContext } from "react";

import { FIREBASE_CONFIG } from "./contants";
import app from "firebase/app";
import "firebase/auth";

const FirebaseContext = React.createContext();

export const useFirebase = () => useContext(FirebaseContext);

const {
  apiKey,
  authDomain,
  databaseURL,
  messagingSenderId,
  projectId,
  storageBucket
} = FIREBASE_CONFIG;

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId
};

export default function FirebaseProvider({ children }) {
  const firebase = app.initializeApp(config);
  const auth = app.auth();

  const signup = ({ email, password }) =>
    auth.createUserWithEmailAndPassword(email, password);

  const login = ({ email, password }) =>
    auth.signInWithEmailAndPassword(email, password);

  const signout = () => auth.signOut();

  const ctx = {
    auth,
    firebase,
    signout,
    login,
    signup
  };

  return (
    <FirebaseContext.Provider value={ctx}>
      {" "}
      {children}{" "}
    </FirebaseContext.Provider>
  );
}
