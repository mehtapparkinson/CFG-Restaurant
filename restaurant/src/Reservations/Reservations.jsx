import React, { useState } from "react";
import "./reservations.css";

function Reservations() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [partySize, setPartySize] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if name is empty
    if (!name) {
      alert("Please enter your name");
      return;
    }
    //check email exists and includes @
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    // Check if tel is empty
    if (!tel) {
      alert("Please enter your telephone number");
      return;
    }
    // Check if reservation date is in the future
    const today = new Date();
    const reservationDateObj = new Date(reservationDate);

    if (reservationDateObj < today) {
      alert("Please select a future date");
      return;
    }
    // Check if party size is between 1 and 10
    if (partySize < 1 || partySize > 10) {
      alert("Please enter a party size between 1 and 10");
      return;
    }

    // MailTo action
    const mailtoLink = `mailto:dolce@bistro.com?subject=Reservation Request&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ATelephone: ${tel}%0D%0AReservation Date: ${reservationDate}%0D%0AReservation Time: ${reservationTime}%0D%0AParty Size: ${partySize}%0D%0ANotes: ${notes}`;
    window.location.href = mailtoLink;
  };


  return (
    <div className="form-container" id="reservations">
    <form className="form" onSubmit={handleSubmit}>
      <h2>RESERVATIONS</h2>
      <div className="row">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="tel">Telephone:</label>
        <input
          type="tel"
          id="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="reservationDate">Reservation Date:</label>
        <input
          type="date"
          id="reservationDate"
          value={reservationDate}
          onChange={(e) => setReservationDate(e.target.value)}
        />
        <label htmlFor="reservationTime">Reservation Time:</label>
        <input
          type="time"
          id="reservationTime"
          value={reservationTime}
          onChange={(e) => setReservationTime(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="partySize">Party Size:</label>
        <input
          type="number"
          id="partySize"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
      <button className="reservations-button" type="submit" onClick={handleSubmit}>Send</button>
    </form>
    </div>
  );
}

export default Reservations;
