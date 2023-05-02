import React from "react";
import "./checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout(){
    const [{cart}, dispatch]= useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Siddhi/TC_banner_copy-1.jpg" />

                <div>
                    <h2 className="checkout_title">
                        Your Shopping Cart
                    </h2>

                    {cart.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} rating={item.rating} price={item.price} />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
            <Subtotal />
            </div>
        </div>
    )
};

export default Checkout;