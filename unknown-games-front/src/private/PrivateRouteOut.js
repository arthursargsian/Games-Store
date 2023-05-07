import React from "react";
import {useNavigate} from "react-router-dom";

function PrivateRouteOut(props) {
    const navigate = useNavigate()
    const {children} = props;
    const token = localStorage.getItem("adminToken");

    if (!token) return children;

    return navigate("/admin/dashboard-panel");
}

export default PrivateRouteOut;
