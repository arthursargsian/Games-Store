import React from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import Profile from "../components/user/Profile";
import LevleExp from "../components/chat/LevleExp";
import LastFavorite from "../components/single-navbar/LastFavorite";
import {useSelector} from "react-redux";


function AdminProfile() {
    const lastFavoriteList = useSelector((store) => store.favorite.lastFavoriteList);
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <div className="admin-profile">
                    <div style={{margin: !lastFavoriteList.length ? "30px 0 0 650px" : null}}>
                        <Profile/>
                        <LastFavorite role={"admin"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProfile;
