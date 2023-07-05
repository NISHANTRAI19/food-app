import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="restaurant-container">


                {
                    resList.map(restaurant => (<RestaurantCard Data={restaurant} key={restaurant.data.id} />))
                }
            </div>
        </div>
    )
}
export default Body;