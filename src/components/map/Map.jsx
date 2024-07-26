import "./Map.scss";
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import Pin from "../../components/pin/Pin";
function Map({items}){

    return (<>

<MapContainer center={[26.9124,75.7873]} zoom={7} scrollWheelZoom={false} className="map">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map((item)=>(
        <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
    </>);
}

export default Map;
