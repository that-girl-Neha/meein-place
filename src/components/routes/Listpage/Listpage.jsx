
import { listData } from "../../../library/dummydata";
import "./Listpage.scss";
import Filter from "../../filter/Filter";
import Card from "../../card/Card";
import Map from "../../../components/map/Map";
function Listpage (){

    const data=listData;
    return (<>
        <div className="Listpage">
            <div className="listContainer">
                <div className="wrapper">
                  <Filter/>
                  {data.map((item) => (
  <Card key={item.id} item={item} />
))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}/>
            </div>
        </div>
    </>);
}

export default Listpage;