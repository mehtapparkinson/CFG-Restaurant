import React from "react";
import italianDishes from "./data";
import "./menuItems.css";

function menuItems() {
  return (
    <div className="menu-items-container" id="menu">
      <h2>Menu</h2>
      <div className="menu-items">
        {italianDishes.map((dish) => (
          <div key={dish.id} className="menu-item">
            <img src={dish.image} alt={dish.name} className="menu-item-img" />
            <div className="menu-item-content">
              <h3 className="menu-item-title">{dish.name}</h3>
              <p className="menu-item-description">{dish.description}</p>
              <p className="menu-item-price">{dish.price}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default menuItems;
