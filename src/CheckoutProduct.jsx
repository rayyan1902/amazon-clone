import React from "react";
import "./checkoutproduct.css"
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, price, image, rating}){
    const [{cart}, dispatch]= useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "Remove_From_Cart",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} />

        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price"><small>$</small> <strong>{price}</strong></p>
            <div className="checkoutProduct_rating">
            {Array(rating).fill().map((_, i) => (<p>⭐</p>))}  
            </div>
            <button onClick={removeFromCart}>Remove from cart</button>
        </div>
        </div>
    )
};

export default CheckoutProduct;