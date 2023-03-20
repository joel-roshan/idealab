import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import pic1 from "../asset/pic1.jpg";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import TabButton from "../pages/Events/Tabs";

function Eventcardinside(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const [tab, setTab] = useState("about");

  function selectTab(nextTab) {
    setTab(nextTab);
  }

  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <button className="close-modal" onClick={toggleModal}>
              <AiOutlineClose size={24} />
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
              <h3 id="title-text">{props.title}</h3>
            </div>
          </div>
          <div className="date-location">
            <div className="date">
              <CiCalendarDate size={24} />
              <p>{props.date}</p>
            </div>
            <div className="location">
              <a href={props.locationlink} target="_blank">
                <CiLocationOn size={24} />
              </a>
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
