import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => { (swiggyApi()) }, [])

    const swiggyApi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards) //optional chaining
        setfilteredList(json?.data?.cards[2]?.data?.data?.cards)

    }



    return restaurantList.length === 0 ? (< Shimmer />) : (       //condition rendering shimmer or content using tertenary operator
        <div className="body">
            <div className="Filter">
                <input type="text" className="search-box" value={search} onChange={(e) => {

                    setSearch(e.target.value)

                }}></input>

                <div className="search-btn" onClick={() => {



                    setfilteredList(restaurantList.filter((restraunt) => restraunt.data.name.toLowerCase().includes(search.toLowerCase())
                    ));

                }}>
                    Search
                </div>


                <div className="Filter-btn" onClick={() => {
                    setfilteredList(
                        restaurantList.filter((restraunt) => {
                            return restraunt.data.avgRating > 4
                        }))
                }}>Top Rated Restaurants</div>


            </div>



            <div className="restaurant-container">



                {
                    filteredList.map(restaurant => (<RestaurantCard Data={restaurant} key={restaurant.data.id} />))
                }
            </div>
        </div >
    )
}
export default Body;