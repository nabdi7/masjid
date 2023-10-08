import React, { useState } from "react";
import "./Events.css";
import img2 from '../images/pic1.jpg'
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
      <div className="title-background">
          <img src={img2} alt="Masjid" className='masjid-image' />
          <h1>Upcoming Events</h1>
      </div>
      <section className="Events">
        {/* <h1 className="program-title">Upcoming Events</h1> */}

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

      <section className='class-time'>
        <h2>Dugsi Times</h2>
        <ul>
          <li>Monday - Thursday: 5:00pm - 7:00pm</li>
          <li>Saturday - Sunday: 10:00am - 1:00pm</li>
        </ul>
      </section>
    </>
  );
};

export default Events;
