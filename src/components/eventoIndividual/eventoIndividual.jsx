import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { EventContext } from "../../context/EventContext/EventState";
import Menu from "../Menu/Menu"; // Importar el componente Menu

const EventoIndividual = () => {
  const { id } = useParams();
  const { event, getEventById } = useContext(EventContext);

  useEffect(() => {
    getEventById(id);
  }, [getEventById, id]);

  return (
    <div>
      <Menu />
      <h1>EventoIndividual</h1>
      {event ? (
        <>
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Fecha: {event.date}</p>
          <p>Hora de inicio: {event.startDate}</p>
          <p>Hora de finalización: {event.endDate}</p>
          <p>Localización: {event.localization}</p>
          <p>Interés: {event.interest}</p>
          {/* Aquí puedes mostrar otros detalles del evento */}
        </>
      ) : (
        <p>Cargando evento...</p>
      )}
    </div>
  );
};

export default EventoIndividual;
