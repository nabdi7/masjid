import React, { useState, useEffect } from "react";
import "./Events.css";
import img2 from '../images/pic1.jpg';

const Events = () => {
  const getCurrentDate = () => {
    const today = new Date();
    return `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;
  };

  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [currentDate, setCurrentDate] = useState(new Date());

  const updateCurrentDate = () => {
    setCurrentDate(new Date());
    setSelectedDate(getCurrentDate());
  };

  useEffect(() => {
    const intervalId = setInterval(updateCurrentDate, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const [eventsData, setEventsData] = useState([
    {
      date: "2023-10-15",
      title: "Stories of the prophets",
      description: "A lecture on the stories of the prophets.",
    },
    {
      date: "2023-10-20",
      title: "Quran tafsir",
      description: "Tafsir of Quranic verses.",
    },
    {
      date: "2023-10-24",
      title: "Halaqah",
      description: "Group discussion on religious topics.",
    },
    // Add more events as needed
  ]);

  const handleDayClick = (year, month, day) => {
    const clickedDate = `${year}-${month}-${day}`;
    setSelectedDate(clickedDate);
  };

  const nextMonth = () => {
    const nextDate = new Date(currentDate);
    nextDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextDate);
  };

  const prevMonth = () => {
    const prevDate = new Date(currentDate);
    prevDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevDate);
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const currentMonthName = currentDate.toLocaleString("default", { month: "long" });

  const formatDay = (day) => {
    if (day === 1 || day === 21 || day === 31) {
      return `${day}st`;
    } else if (day === 2 || day === 22) {
      return `${day}nd`;
    } else if (day === 3 || day === 23) {
      return `${day}rd`;
    } else {
      return `${day}th`;
    }
  };

  return (
    <>
      <div className="title-background">
        <img src={img2} alt="Masjid" className="masjid-image" />
        <h1>Upcoming Events</h1>
      </div>

      <div className="calendar-and-events-container">
        <section className="calendar">
          <div className="calendar-header">
            <button className="prev-month" onClick={prevMonth}>
              &lt;
            </button>
            <div className="month-year">
              {currentDate.toLocaleString("default", { month: "long" })}{" "}
              {currentDate.getFullYear()}
            </div>
            <button className="next-month" onClick={nextMonth}>
              &gt;
            </button>
          </div>
          <div className="calendar-days">
            {daysOfWeek.map((day) => (
              <div key={day} className="calendar-cell day-of-week">
                {day}
              </div>
            ))}
            {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
              <div
                key={day}
                className={`calendar-cell ${
                  day === parseInt(selectedDate.split("-")[2]) ? "selected" : ""
                }`}
                onClick={() => handleDayClick(currentDate.getFullYear(), currentDate.getMonth() + 1, day)}
              >
                {day}
              </div>
            ))}
          </div>
        </section>

        <section className="selected-day-events">
          <h2>Events for {currentMonthName}</h2>
          {selectedDate && (
            <div>
              <h3>{formatDay(parseInt(selectedDate.split("-")[2]))}</h3>
              {eventsData.map((event) =>
                event.date === selectedDate ? (
                  <div key={event.title}>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                ) : null
              )}
            </div>
          )}
        </section>
      </div>

      <section className="class-time">
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
