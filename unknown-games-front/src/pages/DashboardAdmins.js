import React from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import DashboardPeople from "../components/dashboard/DashboardPeople";

function DashboardAdmins() {
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <DashboardPeople role={"admin"}/>
            </div>
        </>
    );
}

export default DashboardAdmins;
