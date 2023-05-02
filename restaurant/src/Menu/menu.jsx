import React from "react";
import "./menu.css";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <div className="menu-container" id="about">
      <img src="https://i.ibb.co/x6FyDBD/10.png" className="menu-dishes" />
      <div className="text-container">
      <h2 className="text">Variety of taste</h2>
        <p className="text">
          At Dolce Bistro we have brought authentic Italian cuisine all the way
          from Italy. Our team offer a wide selection of flavours that is sure
          to suit the taste buds.
        </p>
      <button className="menu-button" >
      <Link to="reservations" smooth={true} duration={500}>Book Now</Link>
      </button>
      </div>
     
    </div>
  );
};
export default Menu;
