import React, { useContext, useEffect, useState } from "react";
import { useFirebase } from "../config/firebase";

const AuthUserContext = React.createContext(null);

export const useAuthUser = () => useContext(AuthUserContext);

export default function AuthUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const firebase = useFirebase();

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

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
