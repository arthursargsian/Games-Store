import React from "react";
import NavBar from "../page-navigation/NavBar";
import Profile from "./Profile";
import LevleExp from "../chat/LevleExp";
import LastFavorite from "../single-navbar/LastFavorite";

function UserProfilePage() {
    return (
        <>
            <NavBar/>
            <Profile/>
            {/*<LevleExp/>*/}
            <LastFavorite role={"user"}/>
        </>
    );
}

export default UserProfilePage;
