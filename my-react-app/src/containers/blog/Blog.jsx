import React from "react";
import './blog.css';
import blog01 from '../../assets/blog01.png'



const Blog = () => {
    return (
        <div className="blog">
            <div>
                <img src={ blog01 } alt="" />
            </div>
        </div>
    )
}

export default Blog