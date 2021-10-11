import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((res) => {
                console.log(res.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
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
