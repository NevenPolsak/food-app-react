import React, { useState } from "react";
import { GiFullPizza } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const handleNav = () => setNav(!nav);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="container">
        <div>
          <GiFullPizza size={40} style={{ marginLeft: "4px" }} />
        </div>
        <ul className={nav ? "nav-menu active" : "nav-menu"}>
          <li>Home</li>
          <li>Order</li>
          <li>Menu</li>
          <li>Delivery</li>
          <li>Contact</li>
        </ul>
        <div className="hamburger" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} style={{ color: "white" }} />
          ) : (
            <FaBars size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
