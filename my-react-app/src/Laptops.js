import React from 'react';
import lap from './images/1.jpg';
import lap2 from './images/2.jpg';
import "./App.css";

function Laptop() {
    return (
        <div className='laptops-page'>
        <div className='laptops'>
            <img src={lap} className='laptop-1' alt='laptop-1'/>
    <div className='laptops-div'>
    <h2>
Hp Laptop 15 INTEL CELERON Quad Core 8GB RAM -1TB HDD Windows 11 + USB Light For Keyboard</h2>
<p>Brand: <a href='https://www.hp.com/us-en/laptops-and-2-in-1s.html'>Hp</a></p>
<p>₦ 199,999</p>
    </div>
        </div>
         <div className='laptops'>
         <img src={lap2} className='laptop-1' alt='laptop-1'/>
 <div className='laptops-div'>
 <h2>
Lenovo Ideapad 3 Intel Core I3 15" 4GB RAM/ 1TB - FreeDOS 
</h2>
<p>Brand: <a href='https://www.hp.com/us-en/laptops-and-2-in-1s.html'>Hp</a></p>
<p>₦ 199,999</p>
 </div>
     </div>
     </div>
    )
}

export default Laptop;