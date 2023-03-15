import React from "react";
import Eventcardinside from "./Eventcardinside";

const EventcardInsidelist = ({ eventlist }) => {
  return eventlist.map((event) => (
    <Eventcardinside key={event.id} event={event} />
  ));
};

export default EventcardInsidelist;
