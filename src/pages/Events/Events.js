import React from "react";
import { useState } from "react";
import Eventcardinside from "../../components/Eventcardinside";
import Header from "../../components/Header";
import "./Events.css";
import pic1 from "../../asset/pic1.jpg";
import poster from "../../asset/poster.jpeg";
import Footer from "../../components/Footer";
import EventcardInsidelist from "../../components/EventcardInsidelist";

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Pre Marriage Counselling",
      status: "Ongoing",
      pic: "https://i.ibb.co/7bZJYyv/pic1.jpg",
      date: "19-01-2003",
      location: "MEC",
      description: "Pre Marriage Counselling is sjhfdjhf shgishg",
      locationlink:
        "https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587",
    },
    {
      id: 2,
      title: "Pre Marriage Counselling",
      status: "Ongoing",
      pic: "https://i.ibb.co/7bZJYyv/pic1.jpg",
      date: "19-01-2003",
      location: "MEC",
      description: "Pre Marriage Counselling is sjhfdjhf shgishg",
      locationlink:
        "https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587",
    },
  ]);
  return (
    <div>
      <div id="event-body">
        <Header />
        <div className="heading">
          <h2 id="event-heading">What's Happening</h2>
        </div>
        <div className="main-event">
          <EventcardInsidelist eventlist={events} />
        </div>
        <div id="fillerfor"></div>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  );
};

export default Events;
