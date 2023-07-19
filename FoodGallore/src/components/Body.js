import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
//import useRestraunt from "../utils/useRestraunt";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setfilteredList] = useState([]);
    const [search, setSearch] = useState("");


    const status = useOnlineStatus();


    useEffect(() => { (swiggyApi()) }, [])

    const swiggyApi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards) //optional chaining
        setfilteredList(json?.data?.cards[2]?.data?.data?.cards)

    }


    if (status == false)

        return (<h1>Looks like You are offline</h1>)



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
                    filteredList.map(restaurant => (<Link className="res-link" key={restaurant.data.id} to={"restraunts/" + restaurant.data.id} ><RestaurantCard Data={restaurant} /></Link>))
                }
            </div>
        </div >
    )
}
export default Body;