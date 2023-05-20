import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import pic1 from "../asset/pic1.jpg";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TabButton from "../pages/Events/Tabs";
import Contactsevents from "./Contactsevents";

function Eventcardinside(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-box">
              <div className="modal-content">
                <div className="modal-logo" > 
                 IDEALab
                </div>
                <h2>{props.title}</h2>
                
                <div className="tabs-container">
                  <div className="bloc-tabs">
                    <button
                      className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                      onClick={() => toggleTab(1)}
                    >
                      About
                    </button>
                    <button
                      className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                      onClick={() => toggleTab(2)}
                    >
                      Registration
                    </button>
                    <button
                      className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                      onClick={() => toggleTab(3)}
                    >
                      Contact
                    </button>
                  </div>

                  <div className="content-tabs">
                    <div
                      className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                      <h2>About</h2>
                      <hr />
                      <p>
                        {props.about}
                      </p>
                      <div className="ven-date-time">
                        <div className="ven">
                          <p>
                            Venue: {props.location}
                          </p>
                          
                        </div>
                        <div className="ven">
                          <p>
                            Date: {props.date}
                          </p>
                          
                        </div>
                        <div className="ven">
                          <p>
                            Time: {props.time}
                          </p>
                          
                        </div>
                      </div>
                    </div>

                    <div
                      className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                      <h2>Registration</h2>
                      <hr />
                      <p>
                        {props.reg}
                      </p>
                      <div className="reg-btn-wrap">
                      <a href={props.reglink} target='_blank'><button className="reg-btn">Register</button></a>
                      </div>
                      

                    </div>

                    <div
                      className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                      <h2>Contact</h2>
                      <div className="contact-body">
                        <Contactsevents
                        phone="8590498682"
                        name="Jaison Dennis"
                        position="Event Head"
                        />
                        <Contactsevents
                        phone="8138816173"
                        name="Jaison Dennis"
                        position="Event Head"
                        />
                      </div>
                      

                      

                    </div>
                  </div>
                </div>
                <button className="close-modal " onClick={toggleModal}>
                 {/* <AiOutlineClose size={24} /> */}X
                </button>
              </div>
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
              <h3 id="title-text">{props.title}</h3>
            </div>
          </div>
          <div className="date-location">
            <div className="date">
              <CiCalendarDate size={24} />
              <p>{props.date}</p>
            </div>
            <div className="location">
              <a href={props.locationlink} target="_blank" className="link">
                <CiLocationOn size={24} /><p>{props.location}</p>
              </a>
              {/* <p>{props.location}</p> */}
            </div>
          </div>
          <div className="status-time">
            <div className="status">
              <p>{props.status}</p>
            </div>
            <div className="time">
              {/* <p>{props.time}</p> */}
            </div>
            <div className="btn-info">
              <button onClick={toggleModal} className="more-btn">
                more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eventcardinside;
