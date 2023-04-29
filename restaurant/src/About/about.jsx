import React from "react";
import "./about.css";

const About = () => {
  return (
    <div>
      <h2 className="title">Flavours of Italy</h2>
      <p className="text">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices
        leo tellus, vel condimentum felis efficitur eget. Maecenas commodo nulla
        in sapien mattis dapibus.
      </p>
      <img src="carpaccio.jpg" className="photo1" />
      <h5 className="photo1">MOUTHWATERING APPETIZERS</h5>
      <img src="pasta.jpg" className="photo2" />
      <h5 className="photo2">WHOLESOME MAINS</h5>
      <img src="tiramisu.jpg" className="photo3" />
      <h5 className="photo3">SWEET ENDINGS</h5>
    </div>
  );
};
export default About;
