import React from "react";

function Header(props) {
    return (
        <div>
        <h1>Hello, {props.firstName}</h1>
        <p>How are you today, {props.lastName}?</p>
        </div>
    )
}

export default Header;