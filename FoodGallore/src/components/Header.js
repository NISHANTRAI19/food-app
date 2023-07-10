import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [Login, setLogin] = useState("Login")
    return (
        <div className="header">

            <div className="logo-container">
                <Link to="/"> <img className="logo" src={LOGO_URL}></img></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li div className="login-btn" onClick={() => {

                        Login === "Login" ? setLogin("Logout") : setLogin("Login")
                    }}>

                        {Login}</li>
                </ul>
            </div>



        </div>
    )
}
export default Header;
