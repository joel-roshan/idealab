import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import pic1 from "../asset/pic1.jpg";

function Eventcardinside({ event }) {
  console.log(event);
  return (
    <div>
      <div className="event-card">
        <div className="imgholder">
          <img src={event.pic} alt="" />
        </div>
        <div className="event-info">
          <div className="title-btn">
            <div className="title">
              <h3 id="title-text">{event.title}</h3>
            </div>

            <div className="btn-info">
              <button className="more-btn">More</button>
            </div>
          </div>
          <div className="date-location">
            <div className="date">
              <CiCalendarDate size={24} />
              <p>{event.date}</p>
            </div>
            <div className="location">
              <a href={event.locationlink} target="_blank">
                <CiLocationOn size={24} />
              </a>
              <p>{event.location}</p>
            </div>
          </div>
          <div className="status-time">
            <div className="status">
              <p>{event.status}</p>
            </div>
            <div className="time">
              <p>{event.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventcardinside;
