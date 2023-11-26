import React from "react";
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (

        <div className="column">
        <div className="feature__container row">
            <div className="column">
                <img src={ logo } alt="" />
                <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="column">
                <h4>links</h4>
                <p>Overons</p>
                <p>Social Media</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="column">
                <h4>Company</h4>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="column">
                <h4>Get in touch</h4>
                <p>Crechterwoord K12 182 DK Alknjkcb</p>
                <p>+2349154673779</p>
                <p>pattyfean@gmail.com</p>
            </div>
        </div>
    

    </div>
    )
}

export default Footer