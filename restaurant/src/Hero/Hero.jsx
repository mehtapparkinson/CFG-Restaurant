import React from "react";
import { Link } from "react-scroll";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-section" id="home">
      <h2>DOLCE BISTRO</h2>
      <h1>A TASTE OF ITALY</h1>
      <button className="hero-button">
        <Link to="reservations" smooth={true} duration={500}>
          Dine with us
        </Link>
      </button>
    </div>
  );
};

export default Hero;
