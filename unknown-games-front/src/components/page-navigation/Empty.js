import React from "react";
import empty from "../../assets/img/empty-illustration_1.gif";
import img from "../../assets/img/game.avif";

function Empty({role}) {
    return (
        <>
            {role === "admin" ?
                <img className="empty-page" src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" alt=""/> :
                <img className="empty-case" src={empty} alt="Empty Page"/>}
        </>
    );
}

export default Empty;
