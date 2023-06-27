import React, { Component } from "react";
import "./EventCard.css";

function EventCard(props1) {
  return (
    <div>
      <div className="event-Holder" data-tilt data-tilt-scale="1.1">
        <div className="event-thumbnail">
          <img id="event-thumbnail-image" src={props1.img} />
        </div>
        <div className="date">
          <p id="event-posted">{props1.date}</p>
        </div>
        <div className="description">
          <p id="event-desc">{props1.des}</p>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
