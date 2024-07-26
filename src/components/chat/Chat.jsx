import { useState } from "react";
import { userData } from "../../library/dummydata";
import "./Chat.scss";

function Chat(){
const [chat,setChat]=useState(true);
    return (<>
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={()=>setChat(1)} >
                    <img src={userData.img} alt=""/>
                    <span>{userData.name}</span>
                    <p>when can I come to see the property?</p>
                </div>
                <div className="message" onClick={()=>setChat(1)} >
                    <img src={userData.img} alt=""/>
                    <span>{userData.name}</span>
                    <p>when can I come to see the property?</p>
                </div>
                <div className="message" onClick={()=>setChat(1)} >
                    <img src={userData.img} alt=""/>
                    <span>{userData.name}</span>
                    <p>when can I come to see the property?</p>
                </div>
                <div className="message" onClick={()=>setChat(1)} >
                    <img src={userData.img} alt=""/>
                    <span>{userData.name}</span>
                    <p>when can I come to see the property?</p>
                </div>
                <div className="message" onClick={()=>setChat(1)} >
                    <img src={userData.img} alt=""/>
                    <span>{userData.name}</span>
                    <p>when can I come to see the property?</p>
                </div>
                <div className="message" onClick={()=>setChat(1)} >
                    <img src={userData.img} alt=""/>
                    <span>{userData.name}</span>
                    <p>when can I come to see the property?</p>
                </div>
            </div>
            {chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                    <img src={userData.img} alt=""/>
                    {userData.name}
                    <span className="close" onClick={()=>setChat(null)}>𐤕</span>
                    </div>
                </div>
                <div className="center">
                    <div className="chatMessage own">
                        <p>did you liked the property!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage ">
                        <p>did you liked the property!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>did you liked the property!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage ">
                        <p>did you liked the property!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>did you liked the property!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage ">
                        <p>did you liked the property!</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    </>);
}

export default Chat;