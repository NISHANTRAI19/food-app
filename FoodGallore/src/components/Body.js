import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    const [restaurantList, setRestaurantList] = useState(resList);
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