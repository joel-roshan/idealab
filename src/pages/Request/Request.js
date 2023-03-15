import React from "react";
import Header from "../../components/Header";
import "./Request.css";
import Footer from "../../components/Footer";

const Request = () => {
  return (
    <div id="request-page">
      <Header />
      <div className="container">
        <div className="message">
          <h2>Book an equipment</h2>
          <p>Fill out these details</p>
        </div>
        <div className="input-container">
          <div className="box">
            <input
              className="input-box"
              required="True"
              type="text"
              placeholder="Name *"
            />
          </div>
          <div className="box">
            <input
              className="input-box"
              type="text"
              placeholder="Phone No. *"
            />
          </div>
          <div className="box">
            <input className="input-box" type="text" placeholder="Email *" />
          </div>
          <div className="box">
            <input className="input-box" type="text" placeholder="College *" />
          </div>
          <div className="box">
            <input className="input-box" type="text" placeholder="Class *" />
          </div>
          <div className="box">
            <label>Appoinment Date</label>

            <input
              className="input-box"
              id="date-hold"
              type="date"
              placeholder="Appoinment Date"
              required="True"
            />
          </div>
          <div className="box">
            <select id="equipment" className="input-box">
              <option value="equipment" className="equip">
                Select equipment *
              </option>
              <option value="cnc-machine">CNC Machine</option>
              <option value="3D-printer">3D Printer</option>
              <option value="Laser-Beam">Laser Cutter</option>
              <option value="Sand-Cutter">Sand Blast</option>
            </select>
          </div>
          <div className="box1">
            <textarea
              className="sub-box"
              type="text"
              placeholder="Explain briefly what equipment you need and what you will be using it for *"
            />
          </div>
        </div>
        <div className="sub-btn">
          <input type="submit" className="btnsub" />
          {/* <button className='btnsub'>Submit</button> */}
        </div>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  );
};

export default Request;
