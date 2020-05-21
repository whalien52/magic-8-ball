import React, { useState } from 'react';
import {replies} from "./Replies";
function Eightball() {
    let defaultmsg = "Think of a question.";
    const [msg,  setMsg] = useState(defaultmsg);
    const [type, setType] = useState("");

    function getReply() {
        const {msg, type} = randomReply();
        setMsg(msg);
        setType(type);
    }

    function reset() {
        setMsg(defaultmsg);
        setType("");
    }

    return (
        <div>
            <div id="eight-ball" onClick={getReply}>
            <div id="reply-triangle" className ={type}>
            </div>
            <div id="reply-container">
                {msg}
            </div>
            </div>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

function randomReply() {
    let replyList = replies();
    let rand = Math.floor(Math.random() * replyList.length);
    return replyList[rand];
}

export default Eightball;