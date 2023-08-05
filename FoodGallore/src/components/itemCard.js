
import { CDN_URL } from "../utils/constants";
const ItemCard = ({ prop }) => {




    return (<>
        {prop.map((e) => (<>
            <div key={e?.card?.info?.id} className=" border-b-2 flex justify-between pb-2 w-12/12 ">
                <div className="w-9/12">
                    <span className=" text-slate-400 text-m">{e?.card?.info?.name}</span><br />
                    <span className="text-gray-400 text-sm">₹ {e?.card?.info?.price / 100}</span>
                    <p className="text-gray-400 text-xs pb-2"> {e?.card?.info?.description} </p>
                </div>
                <div className="w-3/12">
                    <div className="absolute text-white bg-opacity-20 bg-black backdrop-blur-lg rounded-lg p-1 my-1 mx-8 hover:cursor-pointer" >
                        Add+

                    </div>



                    <img className="rounded-md mb-2 " src={CDN_URL + e?.card?.info?.imageId}></img>


                </div>

            </div><br /></>
        ))}

    </>)
}
export default ItemCard;