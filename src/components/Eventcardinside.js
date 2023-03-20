<<<<<<< HEAD
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import pic1 from "../asset/pic1.jpg";
=======
import React from 'react'
import { CiCalendarDate } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';
import pic1 from "../asset/pic1.jpg"
import  { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';

>>>>>>> 5fe7c6adb36d6fafde30a37b809a5469e2361a96

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

<<<<<<< HEAD
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
=======
function Eventcardinside (props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  }
 
    return (
      
    <div> 
          {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{props.title}</h2>
            <p>
              {props.desc}
            </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      
           <div className="event-card">
    <div className="imgholder">
      <img src={props.pic} alt="" />
    </div>
    <div className="event-info">
      <div className="title-btn">
        <div className="title">
        <h3 id='title-text'>
          {props.title}
          
        </h3>
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
        <div className="btn-info">
          <button onClick={toggleModal} className="more-btn">more</button>
        </div>
      
        
      </div>

    </div> 
  </div>
  </div>
  )
>>>>>>> 5fe7c6adb36d6fafde30a37b809a5469e2361a96
}

export default Eventcardinside;
