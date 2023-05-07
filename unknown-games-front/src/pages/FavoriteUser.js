import React from "react";
import NavBar from "../components/page-navigation/NavBar";
import Favorite from "../components/single-navbar/Favorite";

function FavoriteUser() {
    return (
        <>
            <NavBar/>
            <Favorite role={"user"}/>
        </>
    );
}

export default FavoriteUser;
