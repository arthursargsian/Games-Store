import React from "react";
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav className="nav">
                <ul className="nav__block">
                    <li className="nav__list"><NavLink className="nav__link" to={"/"}>Discover</NavLink></li>
                    <li className="nav__list"><NavLink className="nav__link" to={"/browse"}>Browse</NavLink></li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;
