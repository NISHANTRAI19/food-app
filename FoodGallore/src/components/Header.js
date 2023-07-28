import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [Login, setLogin] = useState("Login")
    //img <img className=" h-28 mix-blend-color-burn" src={LOGO_URL}></img>
    return (
        <div className="flex justify-between items-center bg-gray-900 h-28 shadow-lg">

            <div >
                <Link to="/"> <span className="text-gray-500 pl-3 text-5xl italic hover:text-white">FG</span></Link>
            </div>
            <div >
                <ul className="flex ">
                    <li className="m-4 p-4 text-lg text-gray-500  hover:text-white "><Link to="/grocery">Grocery</Link></li>
                    <li className="m-4 p-4 text-gray-500 hover:text-white "><Link to="/about">About</Link></li>
                    <li className="m-4 p-4 text-gray-500  hover:text-white">
                        <Link to="/contact">Contact Us</Link></li>
                    <li className="m-4 p-4 text-gray-500  hover:text-white">Cart</li>
                    <li className="m-4 p-4 text-gray-500  hover:text-white" onClick={() => {

                        Login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }}>

                        {Login}</li>
                </ul>
            </div>



        </div>
    )
}
export default Header;
