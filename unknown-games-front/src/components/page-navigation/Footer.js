import React from "react";
import {ReactComponent as Facebook} from "../../assets/img/svg/icons8-facebook.svg"
import {ReactComponent as Youtube} from "../../assets/img/svg/icons8-youtube.svg"
import {ReactComponent as Discord} from "../../assets/img/svg/icons8-discord.svg"
import {ReactComponent as ArrowUp} from "../../assets/img/svg/arrowup.svg"
import Logo from "./Logo";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="mini-footer">
                    <div className="social-links">
                        <a href="#"><Facebook/></a>
                        <a href="#"><Discord/></a>
                        <a href="#"><Youtube/></a>
                    </div>
                    <a href="#header"><ArrowUp className="arrow-up"/></a>
                </div>
                <div className="footer-below">
                    <div className="footer-desc">
                        <h4>
                            © 2023, Games, Inc. All rights reserved. Games, the Games logo, Fortnite,
                            the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and
                            the
                            Unreal Tournament logo are trademarks or registered trademarks of Games, Inc. in the
                            United
                            States of America and elsewhere. Other brands or product names are the trademarks of
                            their
                            respective owners.
                        </h4>
                    </div>
                </div>
                <br/>
                <br/>
            </footer>
        </>
    );
}

export default Footer;
