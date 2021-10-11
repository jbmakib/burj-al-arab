import React from "react";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { setEmail, setPassword, signUpWithEmail_Password } = useAuth();
    const history = useHistory();
    const handleStateChangeOnInput = (e, setState) => {
        setState(e.target.value);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        signUpWithEmail_Password()
            .then((res) => {
                console.log(res.user);
                history.push("/");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
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
        </div>
    );
};

export default Register;
