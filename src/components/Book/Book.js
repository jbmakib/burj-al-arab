import React from "react";
import { Link, useParams } from "react-router-dom";

const Book = () => {
    const { bedType } = useParams();
    return (
        <div style={{ textAlign: "center" }}>
            {bedType ? (
                <>
                    <h1>Let's book a {bedType} Room.</h1>
                    <p>
                        Want a <Link to="/home">different room?</Link>
                    </p>
                </>
            ) : (
                <>
                    <h1>Welcome to book</h1>
                    <p>
                        Want a <Link to="/home">room?</Link>
                    </p>
                </>
            )}
        </div>
    );
};

export default Book;
