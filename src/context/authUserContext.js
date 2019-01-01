import React, { useContext, useEffect, useState } from "react";
import { useFirebase } from "../config/firebase";

const AuthUserContext = React.createContext(null);

export const useAuthUser = () => useContext(AuthUserContext);

export default function AuthUserProvider({ children }) {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || false
  );
  const [loading, setLoading] = useState(true);

  const firebase = useFirebase();

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(
      user => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        setLoading(false);
      },
      () => {
        localStorage.removeItem("user");
        setUser(null);
        setLoading(false);
      }
    );

    // clean up
    return () => listener();
  }, []);

  const ctx = {
    user,
    loading
  };

  return (
    <AuthUserContext.Provider value={ctx}>{children}</AuthUserContext.Provider>
  );
}
