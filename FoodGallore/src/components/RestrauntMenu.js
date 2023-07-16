
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useResMenuAPI from "../utils/useResMenuAPI";

const RestrauntMenu = () => {
    const { resId } = useParams();
    const resInfo = useResMenuAPI(resId);
    console.log("meni")
    console.log(resInfo);
    if (resInfo === null)
        return <Shimmer />


    const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    if (itemCards == null) {

        return (<div className="api-error">
            <div className="api-container">
                <h1>Please select a different Restraunt</h1>
                <h3>click on logo to go home</h3>
                <h4>Changes were made in swiggy API, the array structure to diplay menu items changed</h4>

            </div></div>)
    }


    if (itemCards != null)
        return (
            <div className="menu">

                <h1>{name}</h1>
                <h2> {cuisines.join(", ")}</h2>
                <h3>Cost for Two Rs.{costForTwo / 100}</h3>

                <ul>    {
                    itemCards.map((item, index) => {

                        return (
                            <li key={item.card.info.id}>{item.card.info.name} -Rs.{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)
                    })}
                </ul>

            </div>
        )
}


export default RestrauntMenu;