import React from "react";
import './navbar.css';
import { useState } from "react";
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'

import { Link } from "react-router-dom";




const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="gpt3__navbar row">
            <div className="gpt3__navbar-links row">
                <Link to="/" className="gpt3__navbar-links_logo">
                    <img src={ logo } alt="logo"  />
                </Link>
                <div id="gpt3__navbar-links_container" className="gpt3__navbar-links_container row">
                 
                    <Link className="nav_white" to="/">Home</Link>
                    <Link className="nav_white" to="/whatgpt3">What is GPT?</Link>
                    <Link className="nav_white" to="/features">Open AI</Link>

                    <Link className="nav_white" to="/possibility">Case Studies</Link>
                    <Link className="nav_white" to="/blog">Library</Link>


                </div>
                <div id="gpt3__navbar-sign" className="gpt3__navbar-sign row">
                    <Link className="nav_white" to="/">Sign in</Link>
                    <button  className="nav_white"  type="button" id="nav_button">Sign up</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                     ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                     : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                     }
                     {toggleMenu && (
                        <div className="gpt3__navbar-menu_container row scale-up-center">
                            <div className="gpt3__navbar-menu_container-links column">
                            <Link className="nav_white" to="/">Home</Link>
                    <Link className="nav_white" to="/whatgpt3">What is GPT?</Link>
                    <Link className="nav_white" to="/features">Open AI</Link>

                    <Link className="nav_white" to="/possibility">Case Studies</Link>
                    <Link className="nav_white" to="/blog">Library</Link>

                            </div>
                        <div className="gpt3__navbar-menu_containers-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                        </div>

                        </div>
                     )}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar