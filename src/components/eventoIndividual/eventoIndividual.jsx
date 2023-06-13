
// import React, { useEffect, useContext, useState } from "react";
// import { useParams } from "react-router-dom";
// import { EventContext } from "../../context/EventContext/EventState";
// import Menu from "../Menu/Menu";
// import "./EventoIndividual.scss";

// const EventoIndividual = () => {
//   const { id } = useParams();
//   const { event, getEventById } = useContext(EventContext);
//   const [isBodyExpanded, setIsBodyExpanded] = useState(false);

//   useEffect(() => {
//     getEventById(id);
//   }, []);

//   return (
//     <div className="container">
//       <Menu />
//       <div className={`evento ${isBodyExpanded ? "expanded" : ""}`}>
//         {event ? (
//           <>
//             <div className="header">
//               <img className="imagen-fondo" src={event.imageUrl} alt={event.title} />
//               <div className="overlay">
//                 <h2 className="title">{event.name}</h2>
//                 <p className="date">Fecha: {event.date}</p>
//               </div>
//             </div>
//             <div className="body">
//               <p className="description">{event.description}</p>
//               <div className="time-info">
//                 <p className="start-time">Hora de inicio: {event.startDate}</p>
//                 <p className="end-time">Hora de finalización: {event.endDate}</p>
//               </div>
//               <p className="location">Localización: {event.localization}</p>
//               <p className="interest">Interés: {event.interest}</p>
//             </div>
//             <div
//               className="expand-button"
//               onClick={() => setIsBodyExpanded(!isBodyExpanded)}
//             >
//               {isBodyExpanded ? "Minimizar" : "Expandir"}
//             </div>
//           </>
//         ) : (
//           <p>Cargando evento...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventoIndividual;

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
            <img className="imagen-fondo" src={event.imageUrl} alt={event.title} />
            <div className="overlay">
              <h2>{event.title}</h2>
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
            <p>Fecha de publicación: {new Date(event.date).toLocaleDateString()}</p>
            <p>{event.body}</p>
          </div>
        </>
      ) : (
        <p>Cargando evento...</p>
      )}
    </div>
  );
};

export default EventoIndividual;
