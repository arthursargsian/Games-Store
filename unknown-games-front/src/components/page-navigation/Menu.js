import React, {useState} from "react";
import Search from "../search/Search";
import UserProfile from "../user/UserProfile";
import Navigation from "./Navigation";

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <div onClick={() => setMenuOpen(!menuOpen)} className="burger">
                <span></span>
                <span></span>
                <span></span>
            </div>
            {menuOpen ? <div className="menu">
                <>
                    <div className="menu-head">
                        <Search/>
                        <UserProfile/>
                    </div>
                    <Navigation/>
                </>
            </div> : null}
        </>
    );
}

export default Menu;
