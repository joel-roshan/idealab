import React, { useState } from "react";
import Header from "../../components/Header";
import "./Request.css";
import Footer from "../../components/Footer";
import axios from "axios";

const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone_num: "",
    email: "",
    college: "",
    classname: "",
    appointment_date: "",
    description: "",
    is_allotted: true,
    equipment_name: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://idealabbackend-production.up.railway.app/api/book_equip/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      )
      .then((response) => {
        // Handle the response from the API
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

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
              required={true}
              type="text"
              placeholder="Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <input
              className="input-box"
              type="text"
              placeholder="Phone No. *"
              name="phone_num"
              value={formData.phone_num}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <input
              className="input-box"
              type="text"
              placeholder="Email *"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <input
              className="input-box"
              type="text"
              placeholder="College *"
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <input
              className="input-box"
              type="text"
              placeholder="Class *"
              name="classname"
              value={formData.classname}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <label>Appointment Date</label>

            <input
              className="input-box"
              id="date-hold"
              type="date"
              placeholder="Appointment Date"
              required={true}
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
            />
          </div>
          <div className="box">
            <select
              id="equipment"
              className="input-box"
              name="equipment_name"
              value={formData.equipment_name}
              onChange={handleChange}
            >
              <option value={0} className="equip">
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
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="sub-btn">
          <input
            type="submit"
            className="btnsub"
            onClick={handleSubmit}
            value="Submit"
          />
        </div>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  );
};

export default Request;
