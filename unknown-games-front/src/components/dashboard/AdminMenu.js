import React from "react";
import {NavLink} from "react-router-dom";
import {ReactComponent as DataTables} from "../../assets/img/svg/games.svg";
import {ReactComponent as Dashboard} from "../../assets/img/svg/dashboard.svg";
import {ReactComponent as CreateAdmin} from "../../assets/img/svg/connections.svg";
import {ReactComponent as Users} from "../../assets/img/svg/people.svg";


function AdminMenu() {
    return (
        <>
            <div className="column is-2 is-fullheight is-hidden-touch" id="navigation">
                <aside className="menu">
                    <p className="menu-label is-hidden-touch">
                        General
                    </p>
                    <ul className="menu-list">
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? "is-active" : ""}
                                to="/admin/dashboard-panel">
                                <div className="dashboard-icon">
                                    <Dashboard/>
                                    <p>Categories</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? "is-active" : ""}
                                to="/admin/dashboard-admin">
                                <div className="dashboard-icon">
                                    <CreateAdmin/>
                                    <p>Admins</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? "is-active" : ""}
                                to="/admin/dashboard-users">
                                <div className="dashboard-icon">
                                    <Users/>
                                    <p>Users</p>
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({isActive}) => isActive ? "is-active" : ""}
                                to="/admin/dashboard-table">
                                <div className="dashboard-icon">
                                    <DataTables/>
                                    <p>Datatables</p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </aside>
            </div>
        </>);
}

export default AdminMenu;
