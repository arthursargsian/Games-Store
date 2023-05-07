import React, {useCallback, useState} from "react";
import {Helmet} from "react-helmet";
import {Link, useNavigate} from "react-router-dom";
import {logInUser} from "../redux/actions/register";
import {useDispatch, useSelector} from "react-redux";
import Utils from "../Utils";
import {toast, ToastContainer} from "react-toastify";
import {forgetPassword} from "../redux/actions/register";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isEmail, setIsEmail] = useState("");

    const handleSubmitSignIn = useCallback(async (ev) => {
        ev.preventDefault();
        if (isEmail) {
            dispatch(forgetPassword(isEmail));
            toast.success("Email alaredy send, check your email", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setIsEmail("");
        } else {
            toast.error("Input Empty", {
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
    }, [isEmail]);

    return (
        <>
            <div className="wrapper">
                <Helmet>
                    <body className="register-body">
                    </body>
                </Helmet>
                <ToastContainer/>
                <div className="register">
                    <h2 className="register__title">Write Email</h2>
                    <form className="register__form" onSubmit={(ev) => handleSubmitSignIn(ev)}>
                        <div className="register__box">
                            <input className="register__input" value={isEmail} type="email" id="email"
                                   onChange={(ev) => setIsEmail(ev.target.value)}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <Link className="below-nav" to="/register">Sign Up</Link>
                        <button type={"submit"} className="register__btn">Get Password</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
