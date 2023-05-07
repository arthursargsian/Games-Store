import React, {useCallback, useState} from "react";
import discover from "../../pages/Discover";
import {useDispatch} from "react-redux";
import {registerAdmin} from "../../redux/actions/register";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateAdmin() {
    const dispatch = useDispatch();

    const [passwordErrCol, setPasswordErrCol] = useState(false);
    const [registerList, setRegisterList] = useState({
        firstName: "", lastName: "", email: "", password: "", confPassword: "",
    });

    const handleRegister = useCallback((key, value) => {
        registerList[key] = value;
        setRegisterList({...registerList});
    }, [registerList]);

    const handleRegisterSubmit = useCallback((ev) => {
        ev.preventDefault();
        if (registerList.password === registerList.confPassword) {
            dispatch(registerAdmin(registerList));
            setRegisterList({
                firstName: "", lastName: "", email: "", password: "", confPassword: "",
            });
            toast.success('Register was successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            setPasswordErrCol(true);
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

    return (<>
        <ToastContainer className="admin-reg-toast"/>
        <div className="admin-reg">
            <div className="register" style={{height: 570, background: "#282a3c", marginTop: 150}}>
                <form className="register__form" onSubmit={(ev) => handleRegisterSubmit(ev)}>
                    <div className="register__box">
                        <input className="register__input col"
                               onChange={(ev) => handleRegister("firstName", ev.target.value)}
                               type="text"
                               id="firstName"
                               value={registerList.firstName}
                               required/>
                        <label className="lable-txt" htmlFor="firstName">First Name</label>
                    </div>
                    <div className="register__box">
                        <input className="register__input col"
                               onChange={(ev) => handleRegister("lastName", ev.target.value)}
                               type="text"
                               id="lastName"
                               value={registerList.lastName}
                               required/>
                        <label className="lable-txt" htmlFor="lastName">Last Name</label>
                    </div>
                    <div className="register__box">
                        <input className="register__input col"
                               onChange={(ev) => handleRegister("email", ev.target.value)}
                               type="text"
                               id="email"
                               value={registerList.email}
                               required/>
                        <label className="lable-txt" htmlFor="email">Email</label>
                    </div>
                    <div className={`register__box ${passwordErrCol ? "errorBorder" : ""}`}>
                        <input className="register__input col"
                               onChange={(ev) => handleRegister("password", ev.target.value)}
                               type="password"
                               id="password"
                               value={registerList.password}
                               required/>
                        <label className="lable-txt" htmlFor="password">Password</label>
                    </div>
                    <div className={`register__box ${passwordErrCol ? "errorBorder" : ""}`}>
                        <input className="register__input col"
                               onChange={(ev) => handleRegister("confPassword", ev.target.value)}
                               type="password"
                               id="password2"
                               value={registerList.confPassword}
                               required/>
                        <label className="lable-txt" htmlFor="password2">Password</label>
                    </div>
                    <button className="register__btn ">Create Admin</button>
                </form>
            </div>

        </div>
    </>);
}

export default CreateAdmin;
