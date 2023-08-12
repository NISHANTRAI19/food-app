import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [Login, setLogin] = useState("Login")
    //const data = useContext(UserContext);
    const { loggedInUser } = useContext(UserContext);
    // console.log(data)
    const cartItems = useSelector((store) => store.cartSlice.items);

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
                    <li className="m-4 p-4 text-gray-500  hover:text-white">

                        <Link to="/cart">
                            Cart({cartItems.length})</Link></li>
                    <li className="m-4 pt-4 text-gray-500 w-10 hover:text-white" onClick={() => {
                        Login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }}>

                        {Login}

                    </li>
                    <li className="m-4 p-4 text-gray-500  hover:text-white" >
                        {loggedInUser}
                    </li>
                </ul>
            </div>



        </div>
    )
}
export default Header;
