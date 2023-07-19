import { useEffect } from "react";
import { useState } from "react";
const useRestraunt = () => {
    const [api, setApi] = useState([]);

    useEffect(() => {
        (swiggyApi())
    }, [])
    const swiggyApi = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();

        setApi(json?.data?.cards[2]?.data?.data?.cards) //optional chaining


    }

    return api;
}
export default useRestraunt;