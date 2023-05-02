import React from "react";
import "./home.css"
import Product from "./Product";

function Home(){
    return <div className="home">
    <div className="home_container">
        <img className="home_image" src="https://m.media-amazon.com/images/I/81d5OrWJAkL._SX3000_.jpg" />
    <div className="home_row">
    <Product id="12321341" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses [By ER]-[Paperback] Paperback" price={15.99} image="https://m.media-amazon.com/images/I/91cwOSS4sDL.jpg" rating={5} />
    <Product id="49538094" title="KUCCU Stand Mixer, 6.5 Qt 660W, 6-Speed Tilt-Head Food Dough Mixer, Kitchen Electric Mixer with Stainless Steel Bowl,Dough Hook,Whisk, Beater, Egg white separator (6.5-QT, Red)" image="https://m.media-amazon.com/images/I/71kqd5nnIsL._AC_SX522_.jpg" price={159.22} rating={4}  />
    </div>

    <div className="home_row">
    <Product id="4903850" title="Xiaomi Mi Band 7 Activity Tracker High-Res 1.62 AMOLED Screen, Bluetooth 5.2, 120 Sports Modes, Optical Heart Rate & Blood Oxygen Sensor, 24HR Heart Rate & Sleep Monitor Smart Watch" price={46.30} image="https://m.media-amazon.com/images/I/51zdWxYDIeL._AC_SX679_.jpg" rating={4} />
    <Product id="23445930" title="All-new Echo (4th generation) International Version | With premium sound, smart home hub and Alexa | Charcoal" image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_SX569_.jpg" price={35.89} rating={3}  />
    <Product id="3254354345" title="Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 512GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Gray" rating={5} image="https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX466_.jpg" price={1216.25} />
    </div>
    <div className="home_row">
    <Product id="90829332" title="SAMSUNG 49 S95UA Super Ultrawide Dual QHD Monitor, 4ms, QLED, HDR400, USB-C, USB Hub, 120Hz, Height Adjustable Stand, (LS49A950UINXZA) 2022, Charcoal Black" image="https://m.media-amazon.com/images/I/81WWFZa7shL._AC_SX679_.jpg" price={979.95} rating={4} />
    </div>

    </div>
    </div>
};

export default Home;