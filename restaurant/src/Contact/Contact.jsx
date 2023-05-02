import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
   <div className="contact-us-section" id='contact'>
    <img src="https://i.ibb.co/3TTj0tN/13.png" alt="bruschetta" />
    <div className="contact-text">
        <h2>SEE YOU SOON</h2>
        <div className="contact-item">
            <h3>Phone number:</h3>
            <p>1234567890</p>
        </div>
        <div className="contact-item">
            <h3>E-mail address:</h3>
            <p>dolce@bistro.com</p>
        </div>
        <div className="contact-item">
            <h3>Address:</h3>
            <p>Anywhere Street, Any number, Any City, 12345</p>
        </div>
    </div>
   </div>
  )
}

export default Contact