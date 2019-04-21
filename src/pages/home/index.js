import React from "react";
import Home from "./Home";
import Navbar from "../../components/NavBar";

export default (props) => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Home {...props} />
            </div>
        </div>
    )
}