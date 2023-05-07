import React, {useCallback, useEffect, useState} from "react";
import {ReactComponent as User} from "../../assets/img/svg/user.svg";
import {useNavigate} from "react-router-dom";
import Utils from "../../Utils";
import user from "../../assets/img/user1.png";
import {ReactComponent as Arrow} from "../../assets/img/svg/arrow.svg";
import {logOutAdmin} from "../../redux/actions/register";
import {useDispatch} from "react-redux";


function UserProfile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role, setRole] = useState("");
    const [openPanel, setOpenPanel] = useState(false);
    const [status, setStats] = useState(false);

    useEffect(() => {
        if (Utils.getAdmin() && Utils.adminToken()) setRole("admin");
        if (Utils.getUser() && Utils.userToken()) setRole("user");
        if (!Utils.userToken() && !Utils.adminToken()) setRole("sign");
        setStats(Utils.getAdmin() || Utils.getUser());
    }, [role]);

    const handleSign = useCallback(() => {
        if (Utils.adminToken()) {
            navigate("/admin/dashboard-profile");
        } else {
            navigate("/sign-in");
        }
    }, []);

    const handleLogOut = useCallback(() => {
        dispatch(logOutAdmin());
        navigate("/");
    }, [navigate]);


    return (<>
        {role === "admin" ? <>
            <div className="user" onClick={handleSign}>
                <User className="user-icon"/>
                <p className="user-t">{"Admin"}</p>
            </div>
        </> : null}

        {role === "sign" ? <>
            <div className="user" onClick={handleSign}>
                <User className="user-icon"/>
                <p className="user-t">{"Sign In"}</p>
            </div>
        </> : null}

        {role === "user" ? <>
            <div onClick={() => setOpenPanel(!openPanel)} className="navbar-link">
                <figure className="image avatar is-32x32">
                    <img className="is-rounded" src={user}/>
                </figure>
                <p className="admin-name">{`${Utils.getUser().name} ${Utils.getUser().lastName}`}</p>
                <Arrow className="arrow"
                       style={openPanel ? {transform: "rotate(0)"} : {transform: "rotate(3.142rad)"}}/>
                {openPanel ? <div className="navbar-dropdown is-right">
                    <p className="navbar-item" onClick={() => navigate("/user/profile")}>
                        My Profile
                    </p>
                    <hr className="navbar-divider"/>
                    {status.verified ? <>
                        <p className="navbar-item" onClick={() => navigate("/wishlist")}>
                            Wishlist
                        </p>
                        <hr className="navbar-divider"/>
                    </> : null}

                    {status.verified ? <><p className="navbar-item" onClick={() => navigate("/basket")}>
                        Basket
                    </p>
                        <hr className="navbar-divider"/>
                    </> : null}

                    {status.verified ? <> <p className="navbar-item" onClick={() => navigate("/favorite")}>
                        Favorite
                    </p>
                        <hr className="navbar-divider"/>
                    </> : null}

                    <p className="navbar-item" onClick={handleLogOut}>
                        Log out
                    </p>
                </div> : null}
            </div>
        </> : null}

    </>);
}

export default UserProfile;

