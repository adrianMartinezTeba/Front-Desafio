
import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CanalDifusionContext } from "../../context/CanalDifusionContext/CanalDifusionState";
import { EventContext } from "../../context/EventContext/EventState";
import Menu from "../Menu/Menu";

const CanalDifusion = () => {
  const { id } = useParams();
  const { canalDifusion, getCanalDifusionById } = useContext(CanalDifusionContext);
  const { events, getAllEvents } = useContext(EventContext);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    getCanalDifusionById(id);
    getAllEvents();
  }, []);

  useEffect(() => {
    if (canalDifusion && events.length > 0) {
      const filteredEvents = events.filter(
        (event) =>
          event.createdBy === canalDifusion.createdBy &&
          event.createdById === canalDifusion.createdById
      );
      setFilteredEvents(filteredEvents);
    }
  }, [canalDifusion, events]);

  useEffect(() => {
    console.log(canalDifusion);
    console.log(events);
  }, [canalDifusion, events]);

  return (
    <div>
      <Menu />
      <h2>Canal</h2>
      {canalDifusion ? (
        <>
          <h2>{canalDifusion.name}</h2>
          {/* <p>{canalDifusion.description}</p> */}
          <h3>Eventos:</h3>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {filteredEvents.map((event) => (
              <div key={event._id}>
                <Link to={`/event/${event._id}`}>
                  <h4>{event.name}</h4>
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Cargando canal de difusión...</p>
      )}
    </div>
  );
};

export default CanalDifusion;
