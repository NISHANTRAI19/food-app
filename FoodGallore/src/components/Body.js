import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect(() => { (swiggyApi()) }, [])

    const swiggyApi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        setRestaurantList(json?.data?.cards[2]?.data?.data?.cards)

    }

    return (
        <div className="body">
            <div className="Filter-btn" onClick={() => {
                setRestaurantList(
                    restaurantList.filter((restraunt) => {
                        return restraunt.data.avgRating > 4
                    }))
            }}>Top Rated Restaurants</div>
            <div className="restaurant-container">


                {
                    restaurantList.map(restaurant => (<RestaurantCard Data={restaurant} key={restaurant.data.id} />))
                }
            </div>
        </div>
    )
}
export default Body;