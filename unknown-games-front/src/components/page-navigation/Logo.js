import React, {useCallback} from "react";
import logo from "../../assets/img/logo.png"
import {useNavigate} from "react-router-dom";

function Logo() {
    const navigate = useNavigate();

    const handleLogo = useCallback(() => {
        navigate("/");
    }, [navigate]);

    return (
        <>
            <div className="logo">
                {/*<img src={logo} alt="X" className="logo__img"/>*/}
                <h2 onClick={handleLogo} className="logo-txt">Unknown Games</h2>
            </div>
        </>
    );
}

export default Logo;
