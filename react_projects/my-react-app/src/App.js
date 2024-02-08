import React from "react";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Article, Feature } from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />

            </div> 
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Article />
            <Footer />
            <Feature/>

       
        </div>
    )
}

export default App