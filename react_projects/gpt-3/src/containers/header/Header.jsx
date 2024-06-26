import React from "react";
import './header.css';
import ai from '../../assets/ai.png';
import people from '../../assets/people.png';

const Header = () => {
    return (
        <div id="gpt__header" className="row gpt3__header">
            <div className="gpt3__header--left column">
                <div className="h1__container">
                    <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
                </div>
                <div className="paragraph">
                    <p>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything .joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

                </div>
                <div className="sign__up row">
                    <input type="email" name="email" id="email" placeholder="Your Email Address" required />
                    <button type="button">Get Started</button>
                </div>
                <div className="people row">
                    <img src={people} alt="ai" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="ai">
            <img src={ai} alt="ai" />
            </div>
        </div>
    )
}

export default Header