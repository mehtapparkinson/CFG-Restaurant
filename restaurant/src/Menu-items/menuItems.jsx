import React from "react";
import italianDishes from "./data";
import "./menuItems.css";

function menuItems() {
  return (
    <div className="menu-items">
      {italianDishes.map((dish) => (
        <div key={dish.id} className="menu-item">
          <img src={dish.image} alt={dish.name} className="menu-item-img" />
          <div className="menu-item-content">
            <h2 className="menu-item-title">{dish.name}</h2>
            <p className="menu-item-description">{dish.description}</p>
            <p className="menu-item-price">{dish.price}€</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default menuItems;
