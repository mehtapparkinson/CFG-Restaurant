import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      
      <div className="text-photo-container">
      <div className="text-group">
      <h2 className="title">Flavours of Italy</h2>
      <p className="text">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices
        leo tellus, vel condimentum felis efficitur eget. Maecenas commodo nulla
        in sapien mattis dapibus.
      </p>
      </div>
      
      <img src="https://i.ibb.co/3hCZY3d/12.png" className="dishes" />
      </div>
    </div>
  );
};
export default About;
