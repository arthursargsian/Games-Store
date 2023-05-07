import React, {useEffect, useState} from "react";
import Utils from "../../Utils";
import cover from "../../assets/img/user1.png";
import img from "../../assets/img/game.avif";
import WishList from "../single-navbar/WishList";

function Profile() {
    const [customer, setCustomer] = useState();

    useEffect(() => {
        if (Utils.getAdmin()) setCustomer(Utils.getAdmin());
        if (Utils.getUser()) setCustomer(Utils.getUser());
    }, []);

    return (
        <div className="profile-box">
            <div className="profile">
                <div className="profile-block">
                    <figure className="cover-profile">
                        <img src={cover} alt=""/>
                    </figure>
                    <div className="profile-info">
                        <h3>{`${customer?.name} ${customer?.lastName}`}</h3>
                        <h3>{customer?.email}</h3>
                        <h3 style={{textTransform: "capitalize"}}>Role: {customer?.role}</h3>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        </div>

    );
}

export default Profile;
