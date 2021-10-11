import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInWithGoogle, signInWithGithub, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
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

    useEffect(() => {
        user.displayName && history.push(redirect_uri);
    }, [user, history, redirect_uri]);

    return (
        <div className="App">
            <form>
                <input type="email" />
                <br />
                <input type="password" />
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
            </div>
        </div>
    );
};

export default Login;
