import React from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import Favorite from "../components/single-navbar/Favorite";
import img from "../assets/img/game.avif";
import ReactStars from "react-rating-stars-component";

function FavoriteAdmin() {
    return (
        <>
            <AdminNavBar/>
            <div className="admin-favorte">
                <Favorite role="admin"/>
            </div>
        </>
    );
}

export default FavoriteAdmin;
