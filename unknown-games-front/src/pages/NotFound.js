import React from "react";
import gif404 from "../assets/img/404.gif";
import NavBar from "../components/page-navigation/NavBar";

function NotFound() {
    return (
        <>
            <div className="wrapper">
                <NavBar/>
                <div className="gif-404">
                    <img src={gif404} alt=""/>
                </div>
            </div>
        </>
    );
}

export default NotFound;
