import React from "react";
import _ from "lodash";

const messages = [
    {id: _.uniqueId(), message: "How can I buy a game?"},
    {id: _.uniqueId(), message: "I want my money back!"},
    {id: _.uniqueId(), message: "I am not sure about buying!"},
    {id: _.uniqueId(), message: "How can I contact with admin?"},
];

function SendMessage() {
    return (<>
        <div className="send-message">
            <div className="message-btn">How can I buy a game?</div>
            <div className="message-btn">I want my money back!</div>
            <div className="message-btn">How can I contact with admin?</div>
            <div className="message-btn">I am not sure about buying!</div>
        </div>
    </>);
}

export default SendMessage;
