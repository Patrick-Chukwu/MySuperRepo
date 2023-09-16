import React from "react";
import Laptop from "./Laptops";
import "./App.css";

function Main() {
    return (
        <div className="main">
            <div className="hero">
            <h1>Gadlity is your one-stop shop for quality gadgets.</h1>
            <button>buy now!</button>
            </div>
        <Laptop />
        </div>
    )
}

export default Main;