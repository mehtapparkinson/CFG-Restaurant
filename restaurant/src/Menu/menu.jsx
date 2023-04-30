import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div className=".menu-container ">
      <img src="pizza.jpg" className="photo1" />
      <img src="spaghetti.jpg" className="photo2" />
      <h2 className="text">LOREM IPSUM</h2>
      <p className="text">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices
        leo tellus, vel condimentum felis efficitur eget.
      </p>
      <button>Book Now</button>
    </div>
  );
};
export default Menu;
