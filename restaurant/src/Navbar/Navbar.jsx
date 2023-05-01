import React from "react";
import "./navbar.css";
import logo from "./CFGlogo.svg";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-left">
          <img src={logo} alt="Logo" className="logo" />
          <a className="logo-text">Dolce Bistro</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
