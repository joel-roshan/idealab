import React from "react";
import "./Announcements.css";

function Announcements(props) {
  return (
    <div className="announcementcard">
      <p className="announce">{props.announce}</p>
      <a className="link-announce" href={props.linkannounce} target="_blank" a>
        {props.linkname}
      </a>
    </div>
  );
}

export default Announcements;
