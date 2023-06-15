
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../context/EventContext/EventState";
import Menu from "../Menu/Menu";
import "./eventoIndividual.scss";
import expandir from "../../assets/icons/barra_deslizamiento.png";

const EventoIndividual = () => {
  const { id } = useParams();
  const { event, getEventById } = useContext(EventContext);
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  useEffect(() => {
    getEventById(id);
  }, [id, getEventById]);

  return (
    <div className="container">
      <Menu />
      {event ? (
        <>
          <div className="fondo">
            <img className="imagen-fondo" src={event.imageUrl} alt={event.name} />
            <div className="overlay">
              <h2>{event.name}</h2>
            </div>
          </div>
          <div className={`texto ${isTextExpanded ? "expanded" : ""}`}>
            <div className="expand-button" onClick={() => setIsTextExpanded(!isTextExpanded)}>
              {isTextExpanded ? (
                <img src={expandir} alt="Minimizar" />
              ) : (
                <img src={expandir} alt="Expandir" />
              )}
            </div>
            <p className="negrit">Fecha de publicación: {new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
          </div>
        </>
      ) : (
        <p>Cargando evento...</p>
      )}
    </div>
  );
};

export default EventoIndividual;
