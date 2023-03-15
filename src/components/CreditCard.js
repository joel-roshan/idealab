import React from "react";
import "./CreditCard.css";

const CreditCard = (data) => {
  return (
    <div
      id="credit-card"
      data-tilt
      data-tilt-scale="1.1"
      data-tilt-glare
      data-tilt-max-glare="0.8"
    >
      <img src={data.profile} id="creditpagephoto" alt="profile picture" />
      <div></div>
      <h3>{data.name}</h3>
      <h4>{data.role}</h4>
      <h5>Batch of {data.year}</h5>
    </div>
  );
};

export default CreditCard;
