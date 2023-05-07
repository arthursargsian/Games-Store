import React from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import DashboardPeople from "../components/dashboard/DashboardPeople";

function DataTables() {
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <DashboardPeople role={"table"}/>
            </div>
        </>
    );
}

export default DataTables;
