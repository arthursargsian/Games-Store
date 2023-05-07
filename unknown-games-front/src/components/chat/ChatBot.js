import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessgaes from "./ChatMessgaes";
import SendMessage from "./SendMessage";

function ChatBot() {
    return (
        <>
            <div className="chat-block">
                <ChatHeader/>
                <ChatMessgaes/>
                <SendMessage/>
            </div>
        </>
    );
}

export default ChatBot;
