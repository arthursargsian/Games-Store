import React, {useCallback, useEffect, useState} from "react";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from "react-redux";
import {logInAdmin} from "../redux/actions/register";
import Utils from "../Utils";
import {toast, ToastContainer} from "react-toastify";

function AdminSignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState({email: "", password: ""});
    const error = useSelector((store) => store.register.error);

    const handleSignIn = useCallback((key, value) => {
        signIn[key] = value;
        setSignIn({...signIn});
    }, [signIn]);

    const handleSubmitSignIn = useCallback(async (ev) => {
        ev.preventDefault();
        if (signIn.email && signIn.password) {
            await dispatch(logInAdmin(signIn));
            if (!!error) {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
        setSignIn({
            email: "",
            password: "",
        });
        if (localStorage.getItem("adminToken")) navigate("/admin/dashboard-profile");
    }, [signIn, error]);

    const handleForgetPassword = useCallback(() => {
        navigate("/forget-password");
    }, []);

    return (
        <>
            <div className="wrapper">
                <Helmet>
                    <body className="register-body"></body>
                </Helmet>
                <ToastContainer/>
                <div className="register">
                    <h2 className="register__title">Sign In Admin</h2>
                    <form className="register__form" onSubmit={(ev) => handleSubmitSignIn(ev)}>
                        <div className="register__box">
                            <input className="register__input" value={signIn.email} type="text" id="email"
                                   required
                                   onChange={(ev) => handleSignIn("email", ev.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="register__box">
                            <input className="register__input" value={signIn.password} type="password"
                                   id="password"
                                   required
                                   onChange={(ev) => handleSignIn("password", ev.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <button type={"submit"} className="register__btn">Sign In</button>
                        <span onClick={handleForgetPassword} className="forget-password">Forget password ?</span>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AdminSignIn;
