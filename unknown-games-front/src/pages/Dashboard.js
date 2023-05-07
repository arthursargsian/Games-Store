import React from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import DashboardButtons from "../components/dashboard/DashboardButtons";


function Dashboard() {
    return (<>
        <div>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <div className="column is-10" id="page-content">
                    <div className="content-body">
                        <DashboardButtons/>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Dashboard;
