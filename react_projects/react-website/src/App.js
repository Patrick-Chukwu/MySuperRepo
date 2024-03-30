import React, { Component } from 'react';

import Navbar from "./components/Navbar";

import Home from "./pages";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
 

class App extends Component {
  render() {
    return (
      <div>
        <nav>
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/about" className="nav-item">About</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
      <Link to="/blog" className="nav-item">Blog</Link>

      <Link to="/sign-up" className="nav-item">SignUp</Link>
	  </nav>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
              path="/contact"
              element={<Contact />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route
              path="/sign-up"
              element={<SignUp />}
          />
      </Routes>
      </div>
    );
  }
}

export default App;
