import React from "react";
import { Routes, Route, Link} from "react-router-dom";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Article, Feature } from './components';
import './App.css';

const App = () => {
    return (
        <div>
            <Link to="/features">Features</Link>

        <Routes>
            <Route path="/" element={<Header />}></Route>
            <Route path="/brand" element={<Brand />}></Route>
            <Route path="/whatgpt3" element={ <WhatGPT3 />}></Route>
            <Route path="/possibility" element={<Possibility />}></Route>
            <Route path="/features" element={<Features />}></Route>
        </Routes>
        <div className="App">
            <div className="gradient__bg">
                {/* <Navbar />
                <Header /> */}

            </div> 
            
           
            <Features />
            {/* <Possibility /> */}
            <CTA />
            <Blog />
            <Article />
            <Footer />
            <Feature/>

       
        </div>
        </div>

    )
}

export default App