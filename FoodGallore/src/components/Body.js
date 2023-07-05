import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
    return (
        <div className="body">
            <div className="Filter-btn" onClick={() => {
                console.log(
                    resList.filter((restraunt) => {
                        return restraunt.data.avgRating > 4
                    }))
            }}>Top Rated Restaurants</div>
            <div className="restaurant-container">


                {
                    resList.map(restaurant => (<RestaurantCard Data={restaurant} key={restaurant.data.id} />))
                }
            </div>
        </div>
    )
}
export default Body;