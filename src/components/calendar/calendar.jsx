import React, { useState, useEffect, useContext } from 'react';
import './calendar.scss';
import Menu from '../Menu/Menu';
import { EventContext } from '../../context/EventContext/EventState';


const Calendar = () => {
  const { events, getAllEvents } = useContext(EventContext);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    getAllEvents();
  }, []);

  const selectedDateObj = selectedDate ? new Date(date.getFullYear(), date.getMonth(), selectedDate) : null;

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonth = prevDate.getMonth() - 1;
      const newDate = new Date(prevDate.getFullYear(), prevMonth, 1);
      setSelectedDate(null);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 1;
      const newDate = new Date(prevDate.getFullYear(), nextMonth, 1);
      setSelectedDate(null);
      return newDate;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const prevMonthDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const calendar = [];

    for (let x = firstDayIndex; x > 0; x--) {
      const day = prevMonthDays - x + 1;
      calendar.push(
        <div className="calendar-day disabled" key={`prev-${day}`}>
          {day}
        </div>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const day = i;
      calendar.push(
        <div
          className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
          key={day}
          onClick={() => setSelectedDate(day)}
        >
          {day}
        </div>
      );
    }

    return calendar;
  };

  const getEventsByDay = () => {
    if (selectedDateObj) {
      const formattedDate = selectedDateObj.toLocaleDateString(); // Formatear la fecha seleccionada
      const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.startDate);
        const formattedEventDate = eventDate.toLocaleDateString(); // Formatear la fecha del evento
        return formattedEventDate === formattedDate;
      });
      return filteredEvents;
    }
    return [];
  };

  return (
    <div>
      <button onClick={handlePrevMonth}>Prev</button>
      <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <button onClick={handleNextMonth}>Next</button>
      <div className="calendar">
        {renderCalendar()}
      </div>
      {selectedDateObj && (
        <div>
          <h3>Eventos del {selectedDateObj.toLocaleDateString()}</h3>
          {getEventsByDay().length > 0 ? (
            <ul>
              {getEventsByDay().map(event => (
                <li key={event._id}>
                  <h4>{event.name}</h4>
                  <p>{event.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay eventos programados para este día.</p>
          )}
        </div>
      )}
      <Menu />
    </div>
  );
};

export default Calendar;
