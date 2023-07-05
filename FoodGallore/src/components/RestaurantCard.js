import { CDN_URL } from "../utils/constants";


const RestaurantCard = (resData) => {
    const { deliveryTime, avgRating, cuisines, costForTwo, cloudinaryImageId, name } = resData.Data?.data
    return (
        <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }} >

            <img className="restaurant-logo" alt="restaurant logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Rs. {costForTwo / 100} for Two</h4>

            <h4>{deliveryTime} mins</h4>
        </div >
    );

}
export default RestaurantCard;