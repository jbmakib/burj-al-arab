import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    GithubAuthProvider,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    // get all provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // get all function to sign in with provider
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // for logout
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    // for auto state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [auth]);

    // for using it in another file
    return {
        user,
        signInWithGoogle,
        signInWithGithub,
        logout,
    };
};

export default useFirebase;
