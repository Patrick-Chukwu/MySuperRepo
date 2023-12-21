import React from "react";

function Button() {
    function handleClick(){
        let randomNum = Math.floor(Math.random() * 3 ) + 1;
        let userInput = prompt("enter any number between 0 and 3");
        alert(`Computer number: ${randomNum}, your guess: ${userInput}`);
    }
    return (
        <div>
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick}>Guess a number between 1 and 3</button>
        </div>
    );
    
}

export default Button;