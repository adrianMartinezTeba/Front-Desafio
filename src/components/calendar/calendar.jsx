import React, { useState } from 'react';
import './calendar.scss';
import Menu from '../Menu/Menu';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handlePrevMonth = () => {
    setDate(prevDate => {
      const prevMonth = prevDate.getMonth() - 1;
      const newDate = new Date(prevDate.getFullYear(), prevMonth, 1);
      return newDate;
    });
  };

  const handleNextMonth = () => {
    setDate(prevDate => {
      const nextMonth = prevDate.getMonth() + 1;
      const newDate = new Date(prevDate.getFullYear(), nextMonth, 1);
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
        <div className="calendar-day" key={day}>
          {day}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div>
      <button onClick={handlePrevMonth}>Prev</button>
      <h2>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
      <button onClick={handleNextMonth}>Next</button>
      <div className="calendar">
        {renderCalendar()}
      </div>
      <Menu/>
    </div>
  );
};

export default Calendar;
