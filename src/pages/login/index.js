import React from "react";

import Login from "./Login";

export default (props) => {
    console.log(props);
    return (
        <div>
            <Login {...props}/>
        </div>
    );
};
