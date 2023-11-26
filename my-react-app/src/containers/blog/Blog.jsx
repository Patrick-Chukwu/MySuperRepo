import React from "react";
import './blog.css';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';


const Blog = () => {
    return (
        <div className="blog column">
            <h2>A lot is happening, 
We are blogging about it.</h2>
        <div className="row">
        <div >
                <img src={ blog01 } className="blog01" alt="blog01" />
                <div className="blog01_content">
                    <p>Sep 26, 2021</p>
                    <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>

                    <a href=""><p>Read Full Article</p></a>
                </div>
        </div>
        <div className="column">
            <div>
                <img src={ blog02 } className="blog02" alt="blog02" />
            <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <a href="">Read Full Article</a>
            </div>
            </div>

            <div>
                <img src={ blog04 } className="blog04" alt="blog04" />
            <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <a href="">Read Full Article</a>
            </div>
            </div>
        </div>
        <div className="column">
            <div>
                <img src={ blog03 } className="blog03" alt="blog03"/>
            <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <a href="">Read Full Article</a>
            </div>
            </div>

            <div>
                <img src={ blog05 } className="blog05" alt="blog05" />
            <div>
            <p>Sep 26, 2021</p>
            <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
            <a href="">Read Full Article</a>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Blog