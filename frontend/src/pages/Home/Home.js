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
import { apiURL } from "../../configs/urls";

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
    Axios.get(`${apiURL}/api/list_upcoming_events/`)
      .then((response) => {
        setEvent(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Axios.get(`${apiURL}/api/list_equipments/`)
      .then((response) => {
        setEquipment(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const getannouncements = () => {
    Axios.get(`${apiURL}/api/list_annoucements/`)
      .then((res) => {
        setAnnouncements(res.data);
      })
      .catch((err) => console.log(err));
    fetch(`${apiURL}/api/list_teams/`)
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
              AICTE in collaboration with COGNICOR established MEC IDEA Lab in
              2022. It offers interactive learning workshops and training
              programmes with the goal of fostering creativity and promoting
              interest in applications of STEM, multidisciplinary education, and
              collaboration. It will enable faculty and students alike to
              "Engage, Explore, Experience, Express and Excel" by providing all
              the facilities required to turn an idea into a prototype and learn
              technical craft. It stands to assist in the development of
              commercially viable products, meet socioeconomic needs, and
              encourage entrepreneurship in the nearby student community.
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
                      img={item.event_img}
                      des={item.about}
                    />
                  ))}
                </div>
              ) : (
                <div className="error-event">
                  <p>
                    Yikes, No events for the time being! Check back later to see
                    more.
                  </p>
                </div>
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
      <div id="c" className="contactuss">
        <div className="contactus-heading">
          <h3 id="contactus-head">Point of contact</h3>
        </div>
        <div className="mainbox">
          <p>Vishnu C Rajeev</p>
          <p>Student Co-ordinator</p>
          <p>vishnucrajeev.mec@gmail.com</p>
        </div>
        <div className="mainbox">
          <p>Binesh T</p>
          <p>Faculty incharge</p>
          <p>binesht@mec.ac.in</p>
        </div>
        <div className="mainbox">
          <p>Dr. Jacob Thomas V</p>
          <p>Principal</p>
          <p>principal@mec.ac.in</p>
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
