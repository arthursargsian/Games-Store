import React from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import Basket from "../components/single-navbar/Basket";

function BasketPageAdmin() {
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <Basket admin={"admin"}/>
            </div>
        </>
    );
}

export default BasketPageAdmin;
