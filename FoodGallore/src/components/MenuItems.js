import ItemCard from "./itemCard";
import { useState } from "react";
const MenuItems = ({ data }) => {
    const [showData, setShowData] = useState(false);
    const handleClick = () => {
        setShowData(showData != true && true || showData && false)
    }
    return (<>



        <div className="w-10/12 m-auto bg-cyan-950 shadow-md shadow-cyan-600 text-white p-4 rounded-xl my-4 " >
            <div className="flex justify-between  hover:cursor-pointer " onClick={handleClick}>
                <span className="text-gray-200 pb-2" >
                    {data.title} ({data.itemCards.length})
                </span>
                <span className="pl-2"> ⌄</span>
            </div>
            <div >

                {showData && <ItemCard data={data.itemCards} />}





            </div>
        </div>

    </>
    )

}
export default MenuItems;