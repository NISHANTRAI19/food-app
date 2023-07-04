import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const Header = () => {
    return (
        <div className="header">

            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/3055978/screenshots/11864513/media/1e2b32dbdf41848351b3b48ebe954cd3.jpg?compress=1&resize=1000x750&vertical=center"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>



        </div>
    )
}
const restaurantCard = () => {
    return (
        <div className="restaurant-card">

        </div>
    )

}
const Body = () => {
    return (
        <div className="body">
            <div className="restaurant-container">
                <div className="restaurant-card">
                        //restaurant card
                </div>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(<AppLayout />)