import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [Login, setLogin] = useState("Login")
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
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
