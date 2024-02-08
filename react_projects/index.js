const navBar = (
    <nav className="nav">
        <a href="#"><h1>Patrick</h1></a>
        <a href="#"><img src="./images/react-1-logo-png-transparent.png"/></a>

        <ul className="nav_items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navBar, document.getElementById("nav"))

const hero = (
    <div className="hero">
        <h2>A creative</h2>
        <h1>Software Engineer</h1>
        <p>from Abuja,</p>
        <h5>Nigeria</h5>
    </div>
)

// document.getElementById("root").append(JSON.stringify(hero))
ReactDOM.render(hero, document.getElementById("root"))