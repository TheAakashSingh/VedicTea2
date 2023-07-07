import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleScroll = (path) => {
    let element = document.getElementById(path);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };
  return (
    <header style={{ overflow: "hidden" }}>
      <nav className="navbar">
        <div>
          <h2 className="logo">
            <Link to="/">Vedic Teagen</Link>
          </h2>
        </div>
        <div>
          <ul className="nav-links">
            {/* <li>
              <Link to="products">Products</Link>
            </li> */}
            <li>
              <Link to="about">About Us</Link>
            </li>
            <li>
              <Link to="contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* <div className="nav-btn-container"></div> */}
        <div className="mobile-menu-icon" onClick={() => setShowNav(true)}>
          <GiHamburgerMenu />
        </div>
      </nav>
      <div className="nav-sidebar" style={{ right: showNav ? "0" : "-400px" }}>
        <div className="nav-close-icon" onClick={() => setShowNav(false)}>
          <AiOutlineClose />
        </div>
        <ul className="mobile-menu">
          {/* <li>
            <Link to="products" onClick={() => setShowNav(false)}>
              Products
            </Link>
          </li> */}
          <li>
            <Link to="about" onClick={() => setShowNav(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="contactus" onClick={() => setShowNav(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
