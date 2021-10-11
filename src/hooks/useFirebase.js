import { useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    // get all provider
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    });

    return {
        user,
        signInWithGoogle,
    };
};

export default useFirebase;
