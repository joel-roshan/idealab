import React, { useState } from "react";
import Header from "../../components/Header";
import "./Home.css";
import car from "../../asset/car.jpg";

import EventCard from "../../components/EventCard";
import ProfileCard from "../../components/ProfileCard";
import FacilitiesCard from "../../components/FacilitiesCard";
import Footer from "../../components/Footer";
import { useRef, useEffect } from "react";
import Announcements from "../../components/Announcements";
import Axios from "axios";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
export function Addscript(urlOfTheLibrary) {
  if (window.innerWidth > 720) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
  }
}
const Home = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [teams, setTeams] = useState([]);
  const [studentTeams, setStudentTeams] = useState([]);

  useEffect(() => {
    getannouncements();
  }, []);
  const [equipment, setEquipment] = useState([]);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    Axios.get(
      "http://idealabbackend-production-bcb3.up.railway.app/api/list_upcoming_events/"
    )
      .then((response) => {
        setEvent(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Axios.get(
      "http://idealabbackend-production-bcb3.up.railway.app/api/list_equipments/"
    )
      .then((response) => {
        setEquipment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const getannouncements = () => {
    Axios.get(
      "http://idealabbackend-production-bcb3.up.railway.app/api/list_annoucements/"
    )
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => console.log(err));
    fetch(
      "http://idealabbackend-production-bcb3.up.railway.app/api/list_teams/"
    )
      .then((response) => response.json())
      .then((data) => {
        // Filter the data
        const studentTeamsData = data.filter(
          (team) => team.designation === "Student"
        );
        const teamsData = data.filter((team) => team.designation === "Faculty");

        setTeams(teamsData);
        // Update the studentTeams state with the filtered data
        setStudentTeams(studentTeamsData);
        // Process the data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  const circleRef = useRef(null);

  return (
    <div id="homebody">
      <Header />
      <div id="progressBar"></div>
      <div className="carousel">
        <div className="announcement">
          <h2 className="head-announce">From the lab</h2>
          {announcements.length > 0 ? (
      announcements.map((event) => (
        <Announcements
          key={event.id}
          announce={event.announcement_title}
          linkannounce={event.announcement_link}
          linkname={event.announcement_desc}
        />
      ))
    ) : (
      <div>Nothing For Now</div>
    )}
        </div>

        <div className="image">
          <img src={car} alt="" className="car" />
        </div>
      </div>
      <hr className="carouselrule" />
      <div className="about">
        <div className="about-txt-hold">
          <h2 className="about-txt">About idea Lab</h2>
        </div>

        <div className="about-content-image">
          <div className="about-content-hold">
            <p className="about-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              beatae dolore sint ab blanditiis repellat rerum tempore ipsa,
              quasi sapiente. Sed labore, illum distinctio ad earum inventore
              nobis dolor cumque!
            </p>
          </div>
          <div className="about-image-hold">
            <img src={car} alt="about pic" className="about-image" />
          </div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className="event">
        <div className="event-head">
          <h2 id="event-txt-head">Events</h2>
        </div>
        <section id="event-wrapper">
          <div id="event-hold-multi">
            <div>
              {event && event.length > 0 ? (
      <div id="event-hold-multi">
        {event.map((item) => (
          <EventCard
            key={item.id}
            date={item.start_date}
            img={item.img}
            des={item.about}
          />
        ))}
      </div>
    ) : (
      <div>Nothing For Now</div>
    )}
            </div>
          </div>
        </section>
      </div>

      <hr className="carouselrule" />
      <div className="team">
        <div className="team-head">
          <h2 id="team-txt">Team</h2>
        </div>

        <div className="faculties">
          <h3 id="faculties-txt">Faculties</h3>
        </div>

        <div className="team-hold-multi">
          <div>
            {teams.map((team) => (
              <ProfileCard key={team.id} name={team.name} img={team.img} />
            ))}
          </div>
        </div>
        <div className="student">
          <h3 id="student-txt">Student in charges</h3>
        </div>

        <div className="team-hold-multi">
          <div>
            {studentTeams.map((team) => (
              <ProfileCard key={team.id} name={team.name} img={team.img} />
            ))}
          </div>
        </div>
      </div>
      <hr className="carouselrule" />
      <div className="equipments">
        <div className="equipment-heading">
          <h3 id="equipment-head">We have</h3>
        </div>
        <div className="equipment-holder">
          {equipment.map((item) => (
            <FacilitiesCard
              title={item.name}
              img={item.img}
              des={item.description}
            />
          ))}
        </div>
      </div>
      <hr className="carouselrule" />
      <div className="grid">
        <h1 id="gallery-head">Snapshots</h1>
        <div id="gallery" class="container-fluid">
          <img
            src="https://source.unsplash.com/1600x1200?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/1024x768?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/1366x768?female,portrait"
            class="img-responsive"
          ></img>
          <img
            src="https://source.unsplash.com/1920x1080?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/640x360?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/320x640?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/1200x1600?female,portrait"
            class="card img-responsive"
          />
          <img
            src="https://source.unsplash.com/800x600?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/600x800?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/400x600?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/600x400?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/1100x1600?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/1600x1100?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/992x768?female,portrait"
            class="img-responsive"
          />
          <img
            src="https://source.unsplash.com/768x992?female,portrait"
            class="img-responsive"
          />
        </div>
      </div>
      <hr className="carouselrule" />
      <div id="c" className="contactuss">
        <div className="mainbox">
          <p>Name of Contact</p>
          <p>Designation of Contact</p>
          <p>Phone no of Contact</p>
        </div>
        <div className="mainbox">
          <p>Name of Contact</p>
          <p>Designation of Contact</p>
          <p>Phone no of Contact</p>
        </div>
        <div className="mainbox">
          <p>Name of Contact</p>
          <p>Designation of Contact</p>
          <p>Phone no of Contact</p>
        </div>
      </div>
      <hr className="carouselrule" />
      <Footer />

      {Addscript("./tilt.js")}
      {AddLibrary("./scrollbar.js")}
    </div>
  );
};

export default Home;
