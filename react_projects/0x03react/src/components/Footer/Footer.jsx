import React from "react";

function Footer(props) {

    let getRandomNum = () => Math.floor(Math.random() * 10) + 1;



    return (
        <div>
                    <h1>{Math.random() >= 0.5 ? "Value above 0.5" : "values below 0.5"}</h1>
                    <p>{props.result}</p>
                    <h1>Here is a random number between 0 and 10: ${getRandomNum()}</h1>
                    <h2>{getRandomNum() >= 5 ?  `${getRandomNum()} is greater than 5`: "it's less than 5"}</h2>
                    <p>The values are {props.toggleBoolean.toString()} and {props.math} and {props.str}</p>
        </div>
    )
}

export default Footer;