import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // get all provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // get all function to sign in with provider
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider);
    };

    // create user with email and password
    const signInWithEmail_Password = () => {
        return signInWithEmailAndPassword(auth, email, password);
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
        setEmail,
        setPassword,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        signInWithEmail_Password,
        logout,
    };
};

export default useFirebase;
