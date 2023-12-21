import React from "react";

import { useState } from "react";

function Hook() {
    const [inputText, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div>
        <input value={inputText} placeholder="Type something here:" onChange={handleChange} />
        <p>You typed: {inputText}</p>
        <button onClick={() => setText('z')}>Reset</button>
        </div>
    )
}

export default Hook;