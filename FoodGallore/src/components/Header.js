import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [Login, setLogin] = useState("Login")
    return (
        <div className="flex justify-between items-center bg-amber-100 h-28 shadow-lg">

            <div className="">
                <Link to="/"> <img className=" h-28 mix-blend-color-burn" src={LOGO_URL}></img></Link>
            </div>
            <div >
                <ul className="flex ">
                    <li className="m-4 p-4 text-lg"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-4 p-4"><Link to="/about">About</Link></li>
                    <li className="m-4 p-4">
                        <Link to="/contact">Contact Us</Link></li>
                    <li className="m-4 p-4">Cart</li>
                    <li className="m-4 p-4" onClick={() => {

                        Login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }}>

                        {Login}</li>
                </ul>
            </div>



        </div>
    )
}
export default Header;
