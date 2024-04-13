import React from "react";
import { Routes, Route, Link} from "react-router-dom";

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Article, Feature } from './components';
import './App.css';

const App = () => {
    return (
        <div>

        
        <div className="App">
            <div className="gradient__bg">
                 <Navbar />
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/brand" element={<Brand />}/>
            <Route path="/whatgpt3" element={ <WhatGPT3 />}/>
            <Route path="/possibility" element={<Possibility />}/>
            <Route path="/features" element={<Features />}/>
            <Route path="/blog" element={<Blog />}/>

        </Routes>
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
        </div>

    )
}

export default App