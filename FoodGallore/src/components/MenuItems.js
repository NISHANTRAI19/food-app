import ItemCard from "./itemCard";

const MenuItems = ({ data, OpenAccordion, clickHandler }) => {


    return (<>



        <div className="w-10/12 m-auto bg-cyan-950 shadow-md shadow-cyan-600 text-white p-4 rounded-xl my-4 " >
            <div className="flex justify-between  hover:cursor-pointer " onClick={clickHandler}>
                <span className="text-gray-200 pb-2" >
                    {data.title} ({data.itemCards.length})
                </span>
                <span className="pl-2"> ↓</span>
            </div>
            <div >

                {OpenAccordion && <ItemCard key={data?.title} prop={data?.itemCards} />}





            </div>
        </div>

    </>
    )

}
export default MenuItems;