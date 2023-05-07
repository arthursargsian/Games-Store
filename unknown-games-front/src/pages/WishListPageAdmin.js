import React from "react";
import WishList from "../components/single-navbar/WishList";
import NavBar from "../components/page-navigation/NavBar";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import DashboardPeople from "../components/dashboard/DashboardPeople";

function WishListPageAdmin() {
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <WishList role={"admin"}/>
            </div>
        </>
    );
}

export default WishListPageAdmin;
