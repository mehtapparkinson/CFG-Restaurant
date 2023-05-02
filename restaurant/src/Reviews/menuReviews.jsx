import React from "react";
import "./menuReviews.css";

function Reviews() {
  return (
    <div className="review-container">
      <h2 className="title">Reviews</h2>
      <div className="review-boxes">
        <div className="box1">
          <p className="text_a1">TRANSPORTED TO ROME</p>
          <p className="text_b1">
            One bite and I felt like I was back in Italy. Chef Camilla and her
            team have outdone themselves!
          </p>
          <p className="text_c1">- Teddy, Entrepreneur</p>
        </div>
        <div className="box2">
          <p className="text_a2">LOVELY BISTRO</p>
          <p className="text_b2">
            The ambience was great - and the food even better! Simple recipes
            done well, with top-notch ingredients. Will be back!
          </p>
          <p className="text_c2">- Ester, Mother</p>
        </div>
        <div className="box3">
          <p className="text_a3">TASTE OF ITALY</p>
          <p className="text_b3">
            Eating here made me miss Italy so much. What a treat! I will be
            bringing my client meetings here.
          </p>
          <p className="text_c3"> - Carly, Entrepreneur</p>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
