import React from 'react'
import Header from '../../components/Header'
import pic1 from "../../asset/pic1.jpg"
import './Events.css'
import { CiCalendarDate } from 'react-icons/ci';
import { CiLocationOn } from 'react-icons/ci';



const Events = () => {
  return (
    <div>
        <Header />
        <div className="main-event">
          <div className="event-card">
            <div className="imgholder">
              <img src={pic1} alt="" />
            </div>
            <div className="event-info">
            <div className="title-btn">
                <div className="title">
                <h3>
                  Title
                </h3>
                </div>
                <div className="btn-info">
                  <button className="more-btn">More</button>
                </div>
              </div> 
              <div className="date-location">
                <div className="date">
                  <CiCalendarDate size={24} />
                  <p>Date</p>
                </div>
                <div className="location">
                  <CiLocationOn size={24} />
                  <p>Location</p>
                </div>
              </div>
              <div className="status-time">
                <div className="status">
                  <p>Ongoing</p>
                </div>
                <div className="time">
                  <p>9:30-10:30</p>
                </div>
              </div>
            </div> 
          </div>
          {/* place next event card here */}
          <div className="event-card">
            <div className="imgholder">
              <img src={pic1} alt="" />
            </div>
            <div className="event-info">
              <div className="title-btn">
                <div className="title">
                <h3>
                  Title
                </h3>
                </div>
                <div className="btn-info">
                  <button className="more-btn">More</button>
                </div>
                
              </div> 
              <div className="date-location">
                <div className="date">
                  <CiCalendarDate size={24} />
                  <p>Date</p>
                </div>
                <div className="location">
                  <a href='https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587' target='_blank'>
                  <CiLocationOn size={24} /></a>
                  <p>Location</p>
                  
                </div>
              </div>
              <div className="status-time">
                <div className="status">
                  <p>Ongoing</p>
                </div>
                <div className="time">
                  <p>9:30-10:30</p>
                </div>
              </div>
            </div> 
          </div>
          {/* place next event card here */}
          <div className="event-card">
            <div className="imgholder">
              <img src={pic1} alt="" />
            </div>
            <div className="event-info">
              <div className="title-btn">
                <div className="title">
                <h3>
                  Title
                </h3>
                </div>
                <div className="btn-info">
                  <button className="more-btn">More</button>
                </div>
                
              </div> 
              <div className="date-location">
                <div className="date">
                  <CiCalendarDate size={24} />
                  <p>Date</p>
                </div>
                <div className="location">
                  <a href='https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587' target='_blank'>
                  <CiLocationOn size={24} /></a>
                  <p>Location</p>
                  
                </div>
              </div>
              <div className="status-time">
                <div className="status">
                  <p>Ongoing</p>
                </div>
                <div className="time">
                  <p>9:30-10:30</p>
                </div>
              </div>
            </div> 
          </div>
          {/* place next event card here */}
          <div className="event-card">
            <div className="imgholder">
              <img src={pic1} alt="" />
            </div>
            <div className="event-info">
              <div className="title-btn">
                <div className="title">
                <h3>
                  Title
                </h3>
                </div>
                <div className="btn-info">
                  <button className="more-btn">More</button>
                </div>
                
              </div> 
              <div className="date-location">
                <div className="date">
                  <CiCalendarDate size={24} />
                  <p>Date</p>
                </div>
                <div className="location">
                  <a href='https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587' target='_blank'>
                  <CiLocationOn size={24} /></a>
                  <p>Location</p>
                  
                </div>
              </div>
              <div className="status-time">
                <div className="status">
                  <p>Ongoing</p>
                </div>
                <div className="time">
                  <p>9:30-10:30</p>
                </div>
              </div>
            </div> 
          </div>
          {/* place next event card here */}
          <div className="event-card">
            <div className="imgholder">
              <img src={pic1} alt="" />
            </div>
            <div className="event-info">
              <div className="title-btn">
                <div className="title">
                <h3>
                  Title
                </h3>
                </div>
                <div className="btn-info">
                  <button className="more-btn">More</button>
                </div>
                
              </div> 
              <div className="date-location">
                <div className="date">
                  <CiCalendarDate size={24} />
                  <p>Date</p>
                </div>
                <div className="location">
                  <a href='https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587' target='_blank'>
                  <CiLocationOn size={24} /></a>
                  <p>Location</p>
                  
                </div>
              </div>
              <div className="status-time">
                <div className="status">
                  <p>Ongoing</p>
                </div>
                <div className="time">
                  <p>9:30-10:30</p>
                </div>
              </div>
            </div> 
          </div>
          {/* place next event card here */}
          <div className="event-card">
            <div className="imgholder">
              <img src={pic1} alt="" />
            </div>
            <div className="event-info">
              <div className="title-btn">
                <div className="title">
                <h3>
                  Title
                </h3>
                </div>
                <div className="btn-info">
                  <button className="more-btn">More</button>
                </div>
                
              </div> 
              <div className="date-location">
                <div className="date">
                  <CiCalendarDate size={24} />
                  <p>Date</p>
                </div>
                <div className="location">
                  <a href='https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587' target='_blank'>
                  <CiLocationOn size={24} /></a>
                  <p>Location</p>
                  
                </div>
              </div>
              <div className="status-time">
                <div className="status">
                  <p>Ongoing</p>
                </div>
                <div className="time">
                  <p>9:30-10:30</p>
                </div>
              </div>
            </div> 
          </div>
          {/* place next event card here */}
          
        </div>
    </div>
  )
}

export default Events