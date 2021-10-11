import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
    const [name, setName] = useState("");
    const { setUserProfile, updateUserProfile } = useAuth();

    const handleFormOnSubmit = (e) => {
        e.preventDefault();
        const newProfile = {
            displayName: name,
        };
        setUserProfile(newProfile);
        updateUserProfile();
    };
    const handleStateChangeOnInput = (e) => {
        setName(e.target.value);
    };
    return (
        <div className="App">
            <form onSubmit={handleFormOnSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleStateChangeOnInput}
                />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Profile;
