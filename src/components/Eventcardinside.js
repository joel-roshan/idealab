import React from 'react'
import { CiCalendarDate } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import pic1 from "../asset/pic1.jpg"


function Eventcardinside (props) {
 
    return (
    <div>          <div className="event-card">
    <div className="imgholder">
      <img src={props.pic} alt="" />
    </div>
    <div className="event-info">
      <div className="title-btn">
        <div className="title">
        <h3 id='title-text'>
          {/* {props.title} */}
          Pre Marraige Counselling
        </h3>
        </div>
        
        <div className="btn-info">
          <button className="more-btn">More</button>
        </div>
      </div> 
      <div className="date-location">
        <div className="date">
          <CiCalendarDate size={24} />
          <p>{props.date}</p>
        </div>
        <div className="location">
          <a href={props.locationlink} target='_blank'>
          <CiLocationOn size={24} /></a>
          <p>{props.location}</p>
          
        </div>
      </div>
      <div className="status-time">
        <div className="status">
          <p>{props.status}</p>
        </div>
        <div className="time">
          <p>{props.time}</p>
        </div>
        
      </div>

    </div> 
  </div></div>
  )
}

export default Eventcardinside