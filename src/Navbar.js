import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/Calc" activeStyle>
                        Calc
                    </NavLink>
                    <NavLink to="/Files" activeStyle>
                        Files
                    </NavLink>
                    <NavLink to="/Parent" activeStyle>
                        Parent
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;