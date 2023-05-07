import React, {useState} from "react";
import {ReactComponent as Message} from "../../assets/img/svg/message.svg";
import {ReactComponent as Close} from "../../assets/img/svg/close.svg";
import ChatBot from "./ChatBot";

function Chat() {
    const [chatBtn, setCHatBtn] = useState(false);

    return (
        <>
            {chatBtn ? <ChatBot/> : null}
            <div className="chat-btn" onClick={() => setCHatBtn(!chatBtn)}>
                {chatBtn ? <Close/> : <Message/>}
            </div>
        </>
    );
}

export default Chat;
