const nav = (
    <nav className="nav">
        <a href="#">
           <img src="../images/react-1-logo-png-transparent.png" className="nav_logo"/> </a>
        <ul className="nav_items">
        <a href="#"><li>Home</li></a>
        <a href="#"><li>About</li></a>
        <a href="#"><li>Contribute</li></a>
        </ul>

    </nav>
)

ReactDOM.render(nav, document.getElementById("nav"))

const hero = (
    <div className="hero">
        <h1>What is Bitcoin talent?</h1>
        <ol>
            <li>This library houses all the resources you'd need to be a talent n the Bitcoin ecosystem</li>
            <li>There is so much we can do with Bitcoin, I hope this site will get you hooked in the exciting journey ahead of you.</li>
        </ol>
    </div>
)

ReactDOM.render(hero, document.getElementById("hero"))

let footer= (
    <div className="footer">
        <span>&copy; Patrick Chukwu.</span>
        <span>All rights reserved.</span>
    </div>
)

ReactDOM.render(footer, document.getElementById("footer"))