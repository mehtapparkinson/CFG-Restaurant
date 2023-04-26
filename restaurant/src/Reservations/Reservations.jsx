import React, { useState } from "react";
import './reservations.css'

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
    



  };

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Send</button>
    </form>
    </div>
  );
}

export default Reservations;
