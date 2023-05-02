import React from "react";
import "./header.css"
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useStateValue } from "./StateProvider";

function Header(){
    const [{cart, user}, dispatch] = useStateValue();
    return <div className="header">

    <Link to="/">
    <img className="header_logo" src="images/amazon_logo.png"/>
    </Link>

    <div className="header_search">
        <input type="text" className="header_searchInput"  />
        <SearchIcon className="header_searchIcon" />
    </div>

    <div className="header_nav">

        <Link to="/login">  <div className="header_option">
            <span className="header_optionOne">Hello Guest</span>
            <span className="header_optionTwo">Sign In</span>
        </div></Link>    
      
        <div className="header_option">
        <span className="header_optionOne">Return</span>
        <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
        <span className="header_optionOne">Your</span>
        <span className="header_optionTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header_optionBasket">
            <ShoppingCartCheckoutIcon />
            <span className="header_optionTwo header_basketCount">{cart?.length}</span>
        </div>
        </Link>
       
    </div>
    </div>
};

export default Header;