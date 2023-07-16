import { useEffect, useState } from "react"
import { MENU_API } from "./constants";


const useResMenuAPI = (resID) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {

        fetchData();

    }, [])

    async function fetchData() {
        const api = await fetch(MENU_API + resID);
        const json = await api.json();

        setResInfo(json.data);



    }

    return resInfo;
}

export default useResMenuAPI;