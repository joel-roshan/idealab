import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import "./Team.css";
import Footer from "../../components/Footer";
import { apiURL } from "../../configs/urls";


const Team = () => {
  const [teams, setTeams] = useState([]);
  const [studentTeams, setStudentTeams] = useState([]);
   useEffect(() => {
    fetch(
      `${apiURL}/api/list_teams/`
    )
      .then((response) => response.json())
      .then((data) => {
        // Filter the data
        const studentTeamsData = data.filter(
          (team) => team.designation === "Student"
        );
        const teamsData = data.filter((team) => team.designation === "Faculty in Charge");

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
  }, []);
  return (
    <div>
      <Header />
      <div className="team">
        <div className="team-head">
          <h2 id="team-txt">Team</h2>
        </div>

        <div className="faculties">
          <h3 id="team-sub-head">Faculties</h3>
        </div>

        <div className="team-hold-multi-inside">
          <div>
            {teams.map((team) => (
              <ProfileCard key={team.id} name={team.name} img={team.img} />
            ))}
          </div>
        </div>

        <div className="student ">
          <h3 id="team-sub-head">Student in charges</h3>
        </div>

        <div className="team-hold-multi ">
          <div>
            {studentTeams.map((team) => (
              <ProfileCard key={team.id} name={team.name} img={team.img} />
            ))}
          </div>
        </div>
      </div>
      {/* <hr className="carouselrule" /> */}
      <Footer />
    </div>
  );
};

export default Team;
