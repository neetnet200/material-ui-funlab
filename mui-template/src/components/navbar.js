import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={32} /> : <FaBars size={28} />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          {/* <li className="nav-items">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/showcase" onClick={closeMenu}>
              Examples
            </Link>
          </li> */}
        </ul>
      </div>
  )
}

export default Navbar;
