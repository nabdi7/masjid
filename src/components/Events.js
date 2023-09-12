import React, { useState } from "react";
import "./Events.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Events = () => {
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);

  const eventsData = [
    {
      title: "Stories of the prophets",
      start: "2023-09-15",
    },
    {
      title: "Quran tafsir",
      start: "2023-09-20",
    },
    {
      title: "Halaqah",
      start: "2023-09-20",
    },
    // Add more events as needed
  ];

  const handleEventClick = (info) => {
    // Extract events for the selected day
    const selectedDate = info.dateStr;
    const eventsForSelectedDay = eventsData.filter((event) =>
      event.start.startsWith(selectedDate)
    );
  
    setSelectedDayEvents(eventsForSelectedDay);
  };

  return (
    <>
      <section className="Events">
        <h1 className="program-title">Upcoming Events</h1>

        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={eventsData}
          eventClick={handleEventClick}
        />
      </section>

      <section className="selected-day-events">
        <h2>Events for Selected Day</h2>
        <ul>
          {selectedDayEvents.map((event, index) => (
            <li key={index}>{event.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Events;