import React from "react";

function Navbar(props){
    const navStyle = {
        color : "#fff",
        backgroundColor : "#000",
        padding : "2em",
        listStyle: "none",
        display: "flex",
        gap: "2em"
    }
    return (
        <ul style={navStyle}>
        <li>{props.first}</li>
        <li>{props.second}</li>
        <li>{props.third}</li>
        <li>{props.last}</li>
        </ul>
    )
}

export default Navbar;