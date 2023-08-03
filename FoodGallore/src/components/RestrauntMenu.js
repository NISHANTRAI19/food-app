import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useResMenuAPI from "../utils/useResMenuAPI";
import useOnlineStatus from "../utils/useOnlineStatus";

import MenuItems from "./MenuItems";
import { useState } from "react";

const RestrauntMenu = () => {
    const { resId } = useParams();
    const resInfo = useResMenuAPI(resId);
    const [openIndex, setOpenIndex] = useState(null);

    const status = useOnlineStatus();
    if (status == false)
        return (<h1>Looks like You are offline</h1>)

    if (resInfo === null)
        return <Shimmer />


    const { name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;


    const accordionCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((element) => {
        return element?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    })



    if (accordionCategory == null) {

        return (<div className="api-error">
            <div className="api-container">
                <h1>Please select a different Restraunt</h1>
                <h3>click on logo to go home</h3>
                <h4>Changes were made in swiggy API, the array structure to diplay menu items changed</h4>

            </div></div>)
    }
    const handleClick = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
        // we are using prevIndex because current state depends upon 
        // previous index React batches multiple state updates together for performance optimization. The state updates might not happen as expected, and you may end up with unexpected results or race conditions.

    }


    return (<div className="flex justify-center  ">
        <div className="">

            <h1>{name}</h1>
            <h2> {cuisines.join(", ")}</h2>
            <h3>Cost for Two Rs.{costForTwo / 100}</h3>

            <br></br>
            {
                accordionCategory.map((e, index) => {

                    return (<MenuItems key={e?.card?.card?.title}
                        data={e?.card?.card}

                        OpenAccordion={index === openIndex}
                        clickHandler={() => { handleClick(index) }} />)
                })

            }
        </div>


    </div >
    )
}



export default RestrauntMenu;