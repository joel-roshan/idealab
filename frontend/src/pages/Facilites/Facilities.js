import React, { useState, useEffect } from "react";
import FacilitiesCard from "../../components/FacilitiesCard";
import Header from "../../components/Header";
import "./Facilities.css";
import Footer from "../../components/Footer";
import Axios from "axios";
import { apiURL } from "../../configs/urls";


const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  

  useEffect(() => {
    getfacilities();
  }, []);

  const getfacilities = () => {
    Axios.get(
      `${apiURL}/api/list_equipments/`
    )
      .then((res) => {
        setFacilities(res.data);
      })
      .catch((err) => console.log(err));
  };

  const sortedFacilities = facilities.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <div id="facilities-body">
        <Header />
        <div className="heading">
          <h2 id="event-heading">We have</h2>
        </div>
        <div className="facilities-grid">
          {sortedFacilities.map((event) => (
            <FacilitiesCard
              title={event.name}
              img={event.img}
              des={event.description}
            />
          ))}
        </div>
      </div>
      {/* <hr className="carouselrule" /> */}
      <Footer />
    </div>
  );
};

export default Facilities;
