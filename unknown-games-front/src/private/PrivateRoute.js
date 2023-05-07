import React from "react";
import {useNavigate} from "react-router-dom";

function PrivateRoute(props) {
    const navigate = useNavigate()
    const {children} = props;
    const token = localStorage.getItem("adminToken");

    if (!token) return navigate('/admin/sign-in');

    return children;
}

export default PrivateRoute;
