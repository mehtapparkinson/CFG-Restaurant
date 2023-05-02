import React from "react";
import { Link } from "react-scroll";
import "./navbar.css";
import logo from './CFGlogo.svg'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-left">
            <img src={logo} alt="Logo" className="logo"/>
            <Link to="home" smooth={true} duration={500}>Dolce Bistro</Link>
        </li>
        <li>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li>
        <Link to="about" smooth={true} duration={500}>About Us</Link>
        </li>
        <li>
        <Link to="menu" smooth={true} duration={500}>Menu</Link>
        </li>
        <li>
        <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
        </li>
        <li>
        <Link to="reservations" smooth={true} duration={500}>Reservations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
