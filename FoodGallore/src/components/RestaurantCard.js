import { CDN_URL } from "../utils/constants";


const RestaurantCard = (resData) => {

    const { areaName, avgRating, cuisines, costForTwo, cloudinaryImageId, name, sla } = resData?.Data?.info
    const cuisinesfixed = [cuisines[0], cuisines[1]]

    return (
        <div className=" w-[250px] h-[350px] bg-slate-600  hover:bg-gradient-to-tr from-slate-600 to-slate-200  p-4 m-4 rounded-xl"  >

            < img className="rounded-lg" alt="restaurant logo" src={CDN_URL + cloudinaryImageId
            }></img >
            <h5 className="font-bold py-4 text-lg">{name}</h5>
            <h5 >{cuisinesfixed.join(', ')}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <div className="flex justify-between "><h5>{areaName}</h5>
                <h5>{sla.deliveryTime} mins</h5></div>

        </div >
    );

}
// higher order component
// input restraunt card=> restraunt card promoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {

        return <div>
            <span className="absolute mx-10 my-6 h-auto p-1 w-auto text-center bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg  text-white  text-xs hover:cursor-pointer">
                {props.Data.info.aggregatedDiscountInfoV3.header} {props.Data.info.aggregatedDiscountInfoV3.subHeader}
            </span>
            <RestaurantCard {...props} />
        </div>
    }

}
export default RestaurantCard;