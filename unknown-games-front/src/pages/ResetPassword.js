import React, {useCallback, useState} from "react";
import {Helmet} from "react-helmet";
import {Link, useNavigate, useParams} from "react-router-dom";
import {resetPassword} from "../redux/actions/register";
import {useDispatch, useSelector} from "react-redux";
import Utils from "../Utils";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function ResetPassword() {
    const {token} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [passwords, setPasswords] = useState({confPassword: "", password: "",});

    const handleSignIn = useCallback((key, value) => {
        passwords[key] = value;
        setPasswords({...passwords});
    }, [passwords]);

    const handleSubmitSignIn = useCallback((ev) => {
        ev.preventDefault();
        if (passwords.confPassword && passwords.password && passwords.confPassword === passwords.password) {
            const confPassword = passwords.confPassword;
            const password = passwords.password;
            dispatch(resetPassword({confPassword, password, token}));
            setPasswords({
                confPassword: "", password: "",
            });
        } else {
            toast.error("password and conf password aren't relevant", {
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
    }, [passwords]);

    return (<>
        <div className="wrapper">
            <Helmet>
                <body className="register-body">
                </body>
            </Helmet>
            <ToastContainer/>
            <div className="register">
                <h2 className="register__title">Change Password</h2>
                <form className="register__form" onSubmit={(ev) => handleSubmitSignIn(ev)}>
                    <div className="register__box">
                        <input className="register__input" value={passwords.password} type="password"
                               id="password"
                               required
                               onChange={(ev) => handleSignIn("password", ev.target.value)}/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="register__box">
                        <input className="register__input" value={passwords.confPassword} type="password"
                               id="confPassword" required
                               onChange={(ev) => handleSignIn("confPassword", ev.target.value)}/>
                        <label htmlFor="email">Conf Password</label>
                    </div>
                    <Link className="below-nav" to="/register">Sign Up</Link>
                    <button className="register__btn">Change</button>
                </form>
            </div>
        </div>
    </>);
}

export default ResetPassword;

