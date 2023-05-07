import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import Search from "../search/Search";
import UserProfile from "../user/UserProfile";
import Logo from "./Logo";
import Menu from "./Menu";
import Verify from "../Verify";
import Utils from "../../Utils";

function NavBar() {
    const [status, setStats] = useState(false);

    useEffect(() => {
        setStats(Utils.getAdmin() || Utils.getUser());
    }, []);

    return (<>
        <div className="under-header" id="header"></div>
        <header className="header">
            <div className="head-start head">
                <Logo/>
                {window.screen.availWidth >= 1086 ? <Navigation/> : null}
            </div>
            <div className="head-end head">
                {window.screen.availWidth >= 1086 ?
                    <>
                        <Search/>
                        <UserProfile/>
                    </> : <Menu/>
                }
            </div>
        </header>
        {status ? status?.verified === false ? <Verify/> : null : null}
    </>);
}

export default NavBar;
