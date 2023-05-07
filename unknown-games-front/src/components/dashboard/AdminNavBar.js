import React, {useCallback, useState} from "react";
import user from "../../assets/img/user1.png"
import {Link, useNavigate} from "react-router-dom";
import AdminMenu from "./AdminMenu";
import {ReactComponent as Arrow} from "../../assets/img/svg/arrow.svg";
import {useDispatch, useSelector} from "react-redux";
import {logOutAdmin} from "../../redux/actions/register";
import Utils from "../../Utils"

function AdminNavBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openPanel, setOpenPanel] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleLogOut = useCallback(() => {
        dispatch(logOutAdmin());
        navigate("/admin/sign-in");
    }, []);

    return (
        <>
            <nav className="navbar columns is-fixed-top" role="navigation" aria-label="main navigation"
                 id="app-header">
                <div className="navbar-brand column is-2 is-paddingless">
                    <p onClick={() => navigate("/")} className="navbar-item">
                        Unknow Games Admin
                    </p>
                    <div onClick={() => setOpenMenu(!openMenu)} className="navbar-burger">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </div>
                </div>
                <div className="touchMenu">
                    <AdminMenu className="touchMenu"/>
                </div>
                <div id="navMenu" className="navbar-menu column is-hidden-touch">
                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown">
                            <div onClick={() => setOpenPanel(!openPanel)} className="navbar-link">
                                <figure className="image avatar is-32x32">
                                    <img className="is-rounded" src={user}/>
                                </figure>
                                <p className="admin-name">{Utils.getAdmin().name} {Utils.getAdmin().lastName}</p>
                                <Arrow className="arrow"
                                       style={openPanel ? {transform: "rotate(0)"} : {transform: "rotate(3.142rad)"}}/>
                            </div>
                            {openPanel ? <div className="navbar-dropdown is-right">
                                <p className="navbar-item" onClick={() => navigate("/admin/dashboard-profile")}>
                                    My Profile
                                </p>
                                <hr className="navbar-divider"/>
                                <p className="navbar-item" onClick={() => navigate("/admin/wishlist")}>
                                    Wishlist
                                </p>
                                <hr className="navbar-divider"/>
                                <p className="navbar-item" onClick={() => navigate("/admin/basket")}>
                                    Basket
                                </p>
                                <hr className="navbar-divider"/>
                                <p className="navbar-item" onClick={() => navigate("/admin/favorite")}>
                                    Favorite
                                </p>
                                <hr className="navbar-divider"/>
                                <p className="navbar-item" onClick={handleLogOut}>
                                    Log out
                                </p>
                            </div> : null}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default AdminNavBar;
