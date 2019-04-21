import React from "react";
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

export default () => {
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand style={{color: "white"}}>Registration App</NavbarBrand>
            </Navbar>
        </div>
    )
}