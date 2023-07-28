import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
//import useRestraunt from "../utils/useRestraunt";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);//a state variable used to store info for all the restaurants, 
    const [filteredList, setfilteredList] = useState([]);// used to filer and render the restaurants
    // filteredList===restaurantList, to display all restraunts
    const [search, setSearch] = useState("");

    const status = useOnlineStatus();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)


    useEffect(() => { (swiggyApi()) }, [])

    const swiggyApi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();//have to add rejection handle


        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //optional chaining
        setfilteredList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    }


    if (!status)

        return (<h1>Looks like You are offline</h1>)


    return restaurantList.length === 0 ? (< Shimmer />) : (       //condition rendering shimmer or content using tertenary operator
        <div className="body">
            <div className="flex items-center">
                <input type="text" className="text-white p-2  bg-slate-600  hover:bg-gradient-to-tr from-slate-600 to-slate-200 border border-solid border-black rounded-md ml-4" value={search} onChange={(e) => {

                    setSearch(e.target.value)

                }}></input>

                <div className="px-4 m-4  bg-slate-600  hover:bg-gradient-to-tr from-slate-600 to-slate-200 rounded-2xl h-8 hover:cursor-pointer" onClick={() => {
                    const filtered = restaurantList.filter((restraunt) => restraunt.info.name.toLowerCase().includes(search.toLowerCase()));
                    console.log(filtered.length);
                    return (

                        setfilteredList(filtered));


                }}>
                    Search
                </div>


                <div className="px-4  bg-slate-600  hover:bg-gradient-to-tr from-slate-600 to-slate-200 rounded-2xl h-8 hover:cursor-pointer" onClick={() => {
                    setfilteredList(
                        restaurantList.filter((restraunt) => {
                            return restraunt.info.avgRating > 4
                        }))
                }}>Top Rated Restaurants</div>


            </div>


            {/* rendering the restaurants */}
            <div className="flex flex-wrap">



                {
                    filteredList.map(restaurant => (
                        <Link className="res-link" key={restaurant.info.id} to={"restraunts/" + restaurant.info.id} >

                            {restaurant.info.aggregatedDiscountInfoV3 ? <RestaurantCardPromoted Data={restaurant} /> : <RestaurantCard Data={restaurant} />}


                        </Link>))
                }
            </div>
        </div >
    )
}
export default Body;