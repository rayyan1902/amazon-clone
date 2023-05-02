import React from "react";
import "./product.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider";

function Product({id, title, image, price, rating}){
    const [{cart}, dispatch] = useStateValue();
    console.log("this is in the cart >>>>", cart);
    const addToCart = () => {
        //dispatch the item into the data layer
        dispatch({type: "Add_To_Cart",
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    })
    }
    return <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        </div>
        <div className="product_rating">
        {Array(rating).fill().map((_, i) => (<p>⭐</p>))}    
        </div>
            <img src={image} />
        <button onClick={addToCart}>Add to Cart </button>
    </div>
};

export default Product;