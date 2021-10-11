import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInWithGoogle, user } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";
    console.log(redirect_uri);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
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
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
