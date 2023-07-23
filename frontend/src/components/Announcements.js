import React from "react";
import "./Announcements.css";

function Announcements(props) {
  return (
    <div className="announcementcard">
      <h3 className="announce">{props.announce}</h3>
      <a className="link-announce" href={props.linkannounce} target="_blank" a>
        {props.linkname}
      </a>
    </div>
  );
}

export default Announcements;
