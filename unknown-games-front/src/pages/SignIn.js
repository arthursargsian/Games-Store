import React, {useCallback, useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {logInUser} from "../redux/actions/register";
import {useDispatch, useSelector} from "react-redux";
import Utils from "../Utils";
import {toast, ToastContainer} from "react-toastify";
import qs from "query-string";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [signIn, setSignIn] = useState({email: "", password: "",});
    const error = useSelector((store) => store.register.error);

    const handleSignIn = useCallback((key, value) => {
        signIn[key] = value;
        setSignIn({...signIn});
    }, [signIn]);
    console.log()

    useEffect(()=>{
        if (qs.parse(location.search).verify) {
            toast.info('An email has been sent to your Ethereal email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    },[]);

    const handleSubmitSignIn = useCallback(async (ev) => {
        ev.preventDefault();
        if (signIn.email && signIn.password) {
            await dispatch(logInUser(signIn));
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
        })
        if (Utils.userToken()) navigate("/user/profile");
    }, [signIn, error]);

    const handleForgetPassword = useCallback(() => {
        navigate("/forget-password");
    }, []);

    return (
        <>
            <div className="wrapper">
                <Helmet>
                    <body className="register-body">
                    </body>
                </Helmet>
                <ToastContainer/>
                <div className="register">
                    <h2 className="register__title">Sign In</h2>
                    <form className="register__form" onSubmit={(ev) => handleSubmitSignIn(ev)}>
                        <div className="register__box">
                            <input className="register__input" value={signIn.email} type="text" id="email" required
                                   onChange={(ev) => handleSignIn("email", ev.target.value)}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="register__box">
                            <input className="register__input" value={signIn.password} type="password" id="password"
                                   required
                                   onChange={(ev) => handleSignIn("password", ev.target.value)}/>
                            <label htmlFor="password">Password</label>
                        </div>
                        <Link className="below-nav" to="/register">Sign Up</Link>
                        <button className="register__btn">Sign In</button>
                        <span onClick={handleForgetPassword} className="forget-password">Forget password ?</span>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
