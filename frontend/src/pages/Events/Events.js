import React from "react";
import { useState, useEffect } from "react";
import Eventcardinside from "../../components/Eventcardinside";
import Header from "../../components/Header";
import "./Events.css";
import Footer from "../../components/Footer";
import Axios from "axios";
import { apiURL } from "../../configs/urls";

const Events = () => {
  const [eventsongoing, setEventsongoing] = useState([]);
  const [eventsupcoming, setEventsupcoming] = useState([]);
  const [eventspast, setEventspast] = useState([]);

  useEffect(() => {
    getEventsongoing();
  }, []);

  const getEventsongoing = () => {
    Axios.get(
      `${apiURL}/api/list_ongoing_events/`
    )
      .then((res) => {
        console.log(res.body);
        setEventsongoing(res.data);
        console.log("hi");
      })
      .catch((err) => console.log(err));
    Axios.get(
      `${apiURL}/api/list_upcoming_events/`
    )
      .then((res) => {
        console.log(res.body);
        setEventsupcoming(res.data);
        console.log("hi");
      })
      .catch((err) => console.log(err));
    Axios.get(
      `${apiURL}/api/list_past_events/`
    )
      .then((res) => {
        console.log(res.body);
        setEventspast(res.data);
        console.log("hi");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div id="event-body">
        <Header />
        <div className="heading">
          <h2 id="event-heading">What's Happening</h2>
        </div>
        <div className="main-event">
        {eventsongoing && eventsongoing.length>0 ? (
          <div className="ongoing-event">
            
            <h2>Ongoing events</h2>
            <div className="event-card-inside">
              {eventsongoing.map((event) => (
                <>
                  <Eventcardinside
                    // key={event.id}
                    title={event.name}
                    status={event.status}
                    desc="{event.about}"
                    date={event.start_date}
                    location={event.location}
                    // locationlink={event.locationlink}
                    pic={event.event_img}
                    about={event.about}
                    reg={event.registration_link}
                    contacts={event.event_coordinator}
                    time={event.time}
                  />
                  {console.log(event.event_coordinator)}
                </>
              ))}
            </div>
          </div>
  ):(
      <div className="none">
      </div>
  )
  }


        { eventsupcoming.length>0 ? (
          <div className="ongoing-event">
            <h2>Upcoming events</h2>
            <div className="event-card-inside">
              {eventsupcoming.map((event) => (
                <>
                  <Eventcardinside
                    // key={event.id}
                    title={event.name}
                    status={event.status}
                    desc="{event.about}"
                    date={event.start_date}
                    location={event.location}
                    // locationlink={event.locationlink}
                    pic={event.event_img}
                    about={event.about}
                    reg={event.registration_link}
                    contacts={event.event_coordinator}
                    time={event.time}
                  />
                  {console.log(event.event_coordinator)}
                </>
              ))}
            </div>
          </div>
        ):(

          <div className="none">
      </div>

        )}
        {eventspast.length > 0 ?
            (
          <div className="ongoing-event">
            
            <h2>Past events</h2>
            <div className="event-card-inside">
              {eventspast.map((event) => (
                <>
                  <Eventcardinside
                    // key={event.id}
                    title={event.name}
                    status={event.status}
                    desc="{event.about}"
                    date={event.start_date}
                    location={event.location}
                    // locationlink={event.locationlink}
                    pic={event.event_img}
                    about={event.about}
                    reg={event.registration_link}
                    contacts={event.event_coordinator}
                    time={event.time}
                  />
                  {console.log(event.event_coordinator)}
                </>
              ))}
            </div>
          </div>
            ):(
              <div className="none">
                </div>
            )}
          
        </div>
        <div id="fillerfor"></div>
      </div>
      <hr className="carouselrule" />
      <Footer />
    </div>
  );
};

export default Events;
