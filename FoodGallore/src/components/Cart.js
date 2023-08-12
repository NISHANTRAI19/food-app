import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./itemCard";

import { clearCart } from "../utils/cartSlice";



const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {

        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => (store.cartSlice.items))

    if (cartItems.length == 0)
        return (<h1 className="text-center text-white p-2">You must be hunfry order something!</h1>)


    return (
        <div className="text-center">
            <button onClick={() => handleClearCart()}>Clear Cart</button>


            <ItemCard prop={cartItems} />

        </div>);
}

export default Cart;