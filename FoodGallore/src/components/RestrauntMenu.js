import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestrauntMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        setResInfo(json.data)
        console.log(json.data)

    };
    if (resInfo === null)
        return <Shimmer />
    const { name, cuisines, costForTwo } =
        resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;


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