import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="text-photo-container">
        <div className="text-group">
          <h2 className="title">Flavours of Italy</h2>
          <p className="text">
            When everyone is looking at quantity, we are looking at quality, the
            quality in the flavours of Italy. Bringing you authentic Italian
            cousine, you can book a table to make your event unforgetable.
          </p>
        </div>

        <img
          src="https://i.ibb.co/3hCZY3d/12.png"
          className="dishes"
          alt="dishes"
        />
      </div>
    </div>
  );
};
export default About;
