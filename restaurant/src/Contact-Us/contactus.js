import React from 'react';
import './contactus.css';


const Bruschetta = () => {
  return (
    <div className="image-container" id="contact">
        <img src="https://ibb.co/F40ShCH" className="dish" />
        <div className="text-container">
            <h2 className="text">SEE YOU SOON</h2>
            <p className="text">
                PHONE NUMBER{"\n"}
                (123) 456-7890{"\n"}{"\n"}
                EMAIL ADDRESS{"\n"}
                hello@restaurant.com{"\n"}{"\n"}
                RESTAURANT{"\n"}
                123 Anywhere St. Any City, ST 12345
            </p>
      </div>
    </div>
  );
};


export default Bruschetta;