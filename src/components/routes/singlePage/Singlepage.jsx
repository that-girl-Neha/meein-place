import "./Singlepage.scss";
import Slider from "../../slider/Slider";
import {singlePostData, userData} from "../../../library/dummydata"; 
import Map from "../../../components/map/Map";
function Singlepage(){

    return (<>
         <div className="Singlepage">
        <div className="details">
            <div className="wrapper">
                <Slider images={singlePostData.images}/>
                <div className="info">
                    <div className="top">
                        <div className="post">
                            <h1>{singlePostData.title}</h1>
                            <div className="address">
                                <img src="/pin.png" alt=""/>
                                <span>{singlePostData.address}</span>
                            </div>
                            <div className="price">{singlePostData.price} Rs</div>
                        </div>
                        <div className="user">
                            <img src={userData.img} alt=""/>
                            <span>{userData.name}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        {singlePostData.description}
                    </div>
                </div>
            </div>
        </div>
        <div className="features">
        <div className="wrapper">
            <p className="title">General</p>
            <div className="listVertical">
                <div className="feature">
                    <img src="/utility.png" alt=""/>
                    <div className="featureText">
                        <span>Utilities</span>
                        <p>Renter is Responsible.</p>
                    </div>
                </div>

                <div className="feature">
                    <img src="/pet.png" alt=""/>
                    <div className="featureText">
                        <span>Pet Policy</span>
                        <p>pets are allowed.</p>
                    </div>
                </div>

                <div className="feature">
                    <img src="/fee.png" alt=""/>
                    <div className="featureText">
                        <span>Property Fees</span>
                        <p>Must have 3x the rent in total household income.</p>
                    </div>
                </div>
            </div>
            <p className="title">Room Sizes</p>
            <div className="sizes">
                <div className="size">
                    <img src="size.png" alt=""/>
                    <span>80sft</span>
                </div>

                <div className="size">
                    <img src="bed.png" alt=""/>
                    <span>2 beds</span>
                </div>

                <div className="size">
                    <img src="bath.png" alt=""/>
                    <span>1 bathroom</span>
                </div>
            </div>
            <p className="title">Near By places</p>
            <div className="listHorizontal">
            <div className="feature">
                    <img src="/school.png" alt=""/>
                    <div className="featureText">
                        <span>School</span>
                        <p>500m away</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="/bus.png" alt=""/>
                    <div className="featureText">
                        <span>Bus</span>
                        <p>1km away</p>
                    </div>
                </div>
                <div className="feature">
                    <img src="/restaurant.png" alt=""/>
                    <div className="featureText">
                        <span>Restaurant</span>
                        <p>500m away</p>
                    </div>
                </div>
            </div>
            <p className="title">Location</p>
            <div className="mapContainer">
                <Map items={[singlePostData]}/>
            </div>
            <div className="buttons">
                <button>
                    <img src="/chat.png" alt=""/>
                    Sent a Message
                </button>
                <button>
                    <img src="/save.png" alt=""/>
                    Save the Place
                </button>
            </div>
        </div>
        </div>
         </div>
    </>);
}

export default Singlepage;