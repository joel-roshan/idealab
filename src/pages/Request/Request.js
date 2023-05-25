import React, { useEffect, useState } from "react";
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

  const [isSubmitting, setIsSubmitting] = useState(false); // Add state variable for form submission

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [equipmentOptions, setEquipmentOptions] = useState([]);


  useEffect(() => {

    // Fetch the equipment data from the API
    axios
      .get(
        "http://idealabbackend-production-bcb3.up.railway.app/api/list_equipments/"
      )
      .then((response) => {
        // Extract the equipment options from the response data
        const options = response.data.map((equipment) => ({
          id: equipment.id,
          name: equipment.name,
          available: equipment.is_available,
        }));
        setEquipmentOptions(options);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set isSubmitting to true when the form is submitted
    // Replace with your method of getting the CSRF token
    axios
      .post(
        "https://idealabbackend-production-bcb3.up.railway.app/api/book_equip/",
        formData
      )
      .then((response) => {
        console.log(response.data);
        setFormData({
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
        setIsSubmitting(false); // Set isSubmitting to false when the request is successful
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false); // Set isSubmitting to false when there is an error
      });
  };

  return (
    <div className="request-container">
      <Header />
      <div className="request-form-container">
      <h2>Request Equipment</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_num">Phone Number</label>
            <input
              type="tel"
              name="phone_num"
              value={formData.phone_num}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="college">College</label>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="classname">Class Name</label>
            <input
              type="text"
              name="classname"
              value={formData.classname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointment_date">Appointment Date</label>
            <input
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="equipment_name">Equipment</label>
            <select
              name="equipment_name"
              value={formData.equipment_name}
              onChange={handleChange}
              required
            >
              <option value="0" disabled>
                Select Equipment
              </option>
              {equipmentOptions.map((option) => (
                <option
                  key={option.id}
                  value={option.id}
                  disabled={!option.available}
                >
                  {option.name} ({option.available ? "Available" : "Not Available"})
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Request;