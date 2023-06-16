
import React, { useEffect, useContext, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import { CanalDifusionContext } from "../../context/CanalDifusionContext/CanalDifusionState";
import { EventContext } from "../../context/EventContext/EventState";
import Menu from "../Menu/menu";
import mathplus from "../../assets/icons/math-plus.png";
import './canalDifusion.scss';
import barra from '../../assets/image/Rectangle 1.png'


const CanalDifusion = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { canalDifusion, getCanalDifusionById } = useContext(CanalDifusionContext);
  const { events, getAllEvents } = useContext(EventContext);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
    getCanalDifusionById(id);
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
  }, [canalDifusion, events]);

  return (
    <>
   
    <div className="prim">
    <img src={barra} alt="" className="event-barra"/>
      <Menu />
      <button className="botoncete" onClick={() => navigate("/createEvent")}><img className="fotito" src={mathplus} alt="math-plush"/></button>
    
      {canalDifusion ? (
        <>
        
          <h2 className="hdos">{canalDifusion.name}</h2>
          {/* <p>{canalDifusion.description}</p> */}
          <h3 className="htres">Eventos:</h3>
          
            {filteredEvents.map((event) => (
              <div key={event._id} className="prim">
                <Link to={`/event/${event._id}`}>
                  <h4 className="custom-box custom-box--block">{event.name}</h4>
                </Link>
              </div>
            ))}
          
          </>
      ) : (
        <p className="pe">Cargando canal de difusión...</p>
      )}
    </div>
    </>
  );
};

export default CanalDifusion;
