import "./Filter.scss";

function Filter(){

    return (<>
         <div className="Filter">
            <h1>Search results for <b>Mansarowar</b></h1>
            <div className="top">
                <div className="item">
                    <label htmlFor="area">Location</label>
                    <input type="text" id="area" name="area" placeholder="Area Location"/>
                </div>
            </div>

            <div className="bottom">
            <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="Buy">Buy</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="Vila">Vila</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Land">Land</option>
                        <option value="House">House</option>
                        <option value="Business">Business</option>
                    </select>
                </div>

                <div className="item">
                    <label htmlFor="minPrice">minPrice</label>
                    <input type="number" id="minPrice" name="minPrice" placeholder="any"/>
                </div>

                <div className="item">
                    <label htmlFor="maxPrice">maxPrice</label>
                    <input type="number" id="maxPrice" name="maxPrice" placeholder="any"/>
                </div>

                <div className="item">
                    <label htmlFor="BHK">BHK</label>
                    <input type="number" id="BHK" name="BHK" placeholder="any"/>
                </div>

                <button>
                    <img src="/search.png" alt=""/>
                </button>
            </div>
         </div>
    </>);
}

export default Filter;