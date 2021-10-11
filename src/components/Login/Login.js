import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const {
        user,
        setEmail,
        setPassword,
        signInWithGoogle,
        signInWithGithub,
        signInWithFacebook,
        signInWithEmail_Password,
    } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";

    // event handlers
    const handleSignIn = (provider) => {
        provider()
            .then((res) => {
                console.log(res.user);
                history.push(redirect_uri);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    /* const handleSetEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleSetPassword = (e) => {
        setPassword(e.target.value);
    }; */
    const handleStateChangeOnInput = (e, setState) => {
        setState(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignIn(signInWithEmail_Password);
    };

    useEffect(() => {
        user.accessToken && history.push(redirect_uri);
    }, [user, history, redirect_uri]);

    return (
        <div className="App">
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => handleStateChangeOnInput(e, setEmail)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => handleStateChangeOnInput(e, setPassword)}
                />
                <br />
                <input type="submit" value="Login" />
            </form>
            <br />
            <small>
                New User? <Link to="/register">Register Now</Link>
            </small>
            <div>
                <button onClick={() => handleSignIn(signInWithGoogle)}>
                    Google Sign In
                </button>
                <br />
                <button onClick={() => handleSignIn(signInWithGithub)}>
                    Github Sign In
                </button>
                <br />
                <button onClick={() => handleSignIn(signInWithFacebook)}>
                    Facebook Sign In
                </button>
            </div>
        </div>
    );
};

export default Login;
