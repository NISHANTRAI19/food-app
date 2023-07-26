import { CDN_URL } from "../utils/constants";


const RestaurantCard = (resData) => {

    const { deliveryTime, avgRating, cuisines, costForTwo, cloudinaryImageId, name } = resData.Data?.data
    return (
        <div className=" w-[250px] bg-[#F8FDCF] hover:bg-gradient-to-r from-cyan-500 to-blue-500  p-4 m-4 rounded-xl"  >

            < img className="rounded-lg" alt="restaurant logo" src={CDN_URL + cloudinaryImageId
            }></img >
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 >{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>Rs. {costForTwo / 100} for Two</h4>

            <h4>{deliveryTime} mins</h4>
        </div >
    );

}
// higher order component
// input restraunt card=> restraunt card promoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return <div><label className="absolute mx-10 my-6 h-4 w-16 text-center bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg  text-white  text-xs hover:cursor-pointer">Promoted</label>
            <RestaurantCard {...props} /></div>
    }

}
export default RestaurantCard;