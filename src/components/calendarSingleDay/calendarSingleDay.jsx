// import React, { useContext, useState, useEffect } from 'react';
// import { EventContext } from '../../context/EventContext/EventState';

// const CalendarSingleDay = ({ date }) => {
//   const { events, getAllEvents } = useContext(EventContext);
//   const [eventsByDay, setEventsByDay] = useState([]);

//   useEffect(() => {
//     getAllEvents();
//   }, []);

//   useEffect(() => {
//     const filteredEvents = events.filter(event => {
//       const eventDate = new Date(event.startDate);
//       const eventDay = eventDate.getDate();
//       const eventMonth = eventDate.getMonth();
//       const eventYear = eventDate.getFullYear();
//       const selectedDay = date.getDate();
//       const selectedMonth = date.getMonth();
//       const selectedYear = date.getFullYear();
//       return (
//         eventDay === selectedDay &&
//         eventMonth === selectedMonth &&
//         eventYear === selectedYear
//       );
//     });
//     setEventsByDay(filteredEvents);
//   }, [events, date]);

//   return (
//     <div>
//       <h3>Eventos del {date.toLocaleDateString()}</h3>
//       {eventsByDay.length > 0 ? (
//         <ul>
//           {eventsByDay.map(event => (
//             <li key={event._id}>
//               <h4>{event.name}</h4>
//               <p>{event.description}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No hay eventos programados para este día.</p>
//       )}
//     </div>
//   );
// };

// export default CalendarSingleDay;