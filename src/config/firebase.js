import React, { useContext } from "react";

import { FIREBASE_CONFIG } from "./contants";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
  const db = app.firestore();
  db.settings({ timestampsInSnapshots: true });

  const signup = ({ email, password }) =>
    auth.createUserWithEmailAndPassword(email, password);

  const login = ({ email, password }) =>
    auth.signInWithEmailAndPassword(email, password);

  const signout = () => auth.signOut();

  const favMovie = (userId, MovieId) =>
    db.collection("favs").add({
      movie: MovieId,
      user: userId
    });

  const isFav = async (userId, movieId) => {
    let isAlreadyFav = false;

    const res = await db
      .collection("favs")
      .where("movie", "==", movieId)
      .where("user", "==", userId)
      .get();
    res.forEach(doc => {
      const { movie, user } = doc.data();
      console.log("FIRE", movie, user);
      if (movie === movieId && user === userId) {
        isAlreadyFav = true;
      }
    });

    return isAlreadyFav;
  };

  const ctx = {
    auth,
    firebase,
    db,
    isFav,
    signout,
    login,
    signup,
    favMovie
  };

  return (
    <FirebaseContext.Provider value={ctx}>
      {" "}
      {children}{" "}
    </FirebaseContext.Provider>
  );
}
