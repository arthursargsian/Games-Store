import React, {useCallback, useState} from "react";
import {Helmet} from "react-helmet";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {registerUsers} from "../redux/actions/register";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [passwordErrCol, setPasswordErrCol] = useState(false);
    const [registerList, setRegisterList] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confPassword: "",
    });

    const handleRegister = useCallback((key, value) => {
        registerList[key] = value;
        setRegisterList({...registerList});
    }, [registerList]);

    const handleRegisterSubmit = useCallback((ev) => {
        ev.preventDefault();
        if (registerList.password === registerList.confPassword) {
            dispatch(registerUsers(registerList));
            setRegisterList({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confPassword: "",
            });
            navigate("/sign-in?verify=1");
        } else {
            setPasswordErrCol(true);
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
    }, [registerList]);
    return (
        <>
            <div className="wrapper">
                <Helmet>
                    <body className="register-body">
                    </body>
                </Helmet>
                <ToastContainer/>
                <div className="register">
                    <h2 className="register__title">Sign Up</h2>
                    <form className="register__form" onSubmit={(ev) => handleRegisterSubmit(ev)}>
                        <div className="register__box">
                            <input className="register__input"
                                   onChange={(ev) => handleRegister("firstName", ev.target.value)} type="text"
                                   name="firstName"
                                   required
                                   id="firstName"
                                   value={registerList.firstName}/>
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="register__box">
                            <input className="register__input"
                                   onChange={(ev) => handleRegister("lastName", ev.target.value)} type="text"
                                   id="lastName"
                                   value={registerList.lastName}
                                   required/>
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                        <div className="register__box">
                            <input className="register__input"
                                   onChange={(ev) => handleRegister("email", ev.target.value)} type="text"
                                   id="email"
                                   value={registerList.email}
                                   required/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className={`register__box ${passwordErrCol ? "errorBorder" : ""}`}>
                            <input className="register__input"
                                   onChange={(ev) => handleRegister("password", ev.target.value)} type="password"
                                   id="password"
                                   value={registerList.password}
                                   required/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className={`register__box ${passwordErrCol ? "errorBorder" : ""}`}>
                            <input className="register__input"
                                   onChange={(ev) => handleRegister("confPassword", ev.target.value)} type="password"
                                   id="password2"
                                   value={registerList.confPassword}
                                   required/>
                            <label htmlFor="password2">Password</label>
                        </div>
                        <Link className="below-nav" to="/sign-in">Sign In</Link>
                        <button className="register__btn dashboard-reg-btn">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
