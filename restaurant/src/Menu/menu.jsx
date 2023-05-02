import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu-container" id="about">
      <img src="https://i.ibb.co/x6FyDBD/10.png" className="menu-dishes" />
      <div className="text-container">
      <h2 className="text">LOREM IPSUM</h2>
      <p className="text">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices
        leo tellus, vel condimentum felis efficitur eget.
      </p>
      <button>Book Now</button>
      </div>
     
    </div>
  );
};
export default Menu;
