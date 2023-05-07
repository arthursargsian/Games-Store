import React, {useEffect} from "react";
import AdminNavBar from "../components/dashboard/AdminNavBar";
import AdminMenu from "../components/dashboard/AdminMenu";
import DashboardPeople from "../components/dashboard/DashboardPeople";
import {useDispatch, useSelector} from "react-redux";
import {allUsers} from "../redux/actions/register";

function DashboardUsers() {
    return (
        <>
            <AdminNavBar/>
            <div className="columns" id="app-content">
                <AdminMenu/>
                <DashboardPeople role={"user"}/>
            </div>
        </>
    );
}

export default DashboardUsers;
