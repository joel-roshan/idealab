import React from "react";
import { useState, useEffect } from "react";
import Eventcardinside from "../../components/Eventcardinside";
import Header from "../../components/Header";
import "./Events.css";
import pic1 from "../../asset/pic1.jpg";
import poster from "../../asset/poster.jpeg";
import Footer from "../../components/Footer";
import EventcardInsidelist from "../../components/EventcardInsidelist";
import TabButton from "./Tabs";
import  Axios  from "axios";
const Events = () => {
  const [eventsongoing, setEventsongoing] = useState([]);

  useEffect(() => {
    getEventsongoing();
  }, []);

  const getEventsongoing = () => {
    Axios.get("http://idealabbackend-production.up.railway.app/api/list_all_events/").then(
      (res) => {
        console.log(res.body)
        setEventsongoing(res.data);
        console.log("hi")
      }
    )
    .catch((err) => console.log(err));
  }
  return (
    <div>
      <div id="event-body">
        <Header />
        <div className="heading">
          <h2 id="event-heading">What's Happening</h2>
        </div>
        <div className="main-event">
          <h2>ongoing events</h2>
        {eventsongoing.map((event) => (
            <Eventcardinside
              // key={event.id}
              title={event.name}
              status={event.status}
              // desc={event.description}
              date={event.date}
              location={event.location}
              // locationlink={event.locationlink}
              // pic={poster}
              // about={event.about}
              // reg={event.registration}
              // time={event.time}
            />
          ))}
          <h2>upcoming events</h2>
          <h2>past events</h2>


          
          {/* <Eventcardinside
            title="Pre Marriage Counselling"
            status="ongoing"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis suscipit officia recusandae, eveniet quaerat assumenda
            id fugit, dignissimos maxime non natus placeat illo iusto!
            Sapiente dolorum id maiores dolores? Illum pariatur possimus
            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
            placeat tempora vitae enim incidunt porro fuga ea."
            date="19-01-2003"
            location="MEC"
            locationlink="https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587"
            pic={poster}
            about= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus amet dignissimos laudantium quibusdam, impedit facilis doloremque atque nostrum debitis? Porro dolore fugit aspernatur, ullam dolores explicabo exercitationem esse in repudiandae."
            reg="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus sapiente doloremque libero harum dignissimos laborum soluta, facilis eum deserunt et saepe perferendis enim ipsam animi nisi magnam aspernatur dicta! Magni!"
            
            time="9:30 AM"
          />
          <Eventcardinside
            title="pls work"
            status="ongoing"
            desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            perferendis suscipit officia recusandae, eveniet quaerat assumenda
            id fugit, dignissimos maxime non natus placeat illo iusto!
            Sapiente dolorum id maiores dolores? Illum pariatur possimus
            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
            placeat tempora vitae enim incidunt porro fuga ea. smol change tho"
            date="19-01-2003"
            location="MEC"
            locationlink="https://www.google.com/maps/place/Model+Engineering+College+Road,+Karimakkad,+Thrikkakara,+Edappally,+Kochi,+Kerala+682021/@10.0283637,76.3263237,17z/data=!4m12!1m6!3m5!1s0x3b080c5006491601:0xcf23e14245d4694d!2sGovernment+Model+Engineering+College!8m2!3d10.0283637!4d76.3285124!3m4!1s0x3b080c5074bffe33:0x1747d298a33d657a!8m2!3d10.0283525!4d76.328587"
            pic={poster}
          />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside />
          <Eventcardinside /> */}
        </div>
        <div id="fillerfor"></div>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  );
};

export default Events;
