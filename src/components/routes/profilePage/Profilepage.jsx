import "./Profilepage.scss";

import {userData} from "../../../library/dummydata";
import List from "../../list/List";
import Chat from "../../chat/Chat";

function Profilepage(){

    return (<>
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avatar: <img src={userData.img} alt="" />
                        </span>

                        <span>
                            Username: <b>{userData.name}</b>
                        </span>
                        <span>
                            email: <b>divya20@gmail.com</b>
                        </span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create e new post</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                       
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    </>);
}
export default Profilepage;