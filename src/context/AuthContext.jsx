import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContextData = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(true);

  const createNewUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
      console.log("This is onSatat", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const signInUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const authInfo = {
    createNewUser,
    user,
    setUser,
    loader,
    setLoader,
    signInUser,
    signOutUser,
  };
  return (
    <AuthContextData.Provider value={authInfo}>
      {children}
    </AuthContextData.Provider>
  );
};

export default AuthContext;
