import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Prayer.css";
import img1 from '../images/pic9.webp';

const Prayer = () => {
  const [prayerTimes, setPrayerTimes] = useState({});

  useEffect(() => {
    // Define the Aladhan API URL for Kent, Washington
    const apiUrl = "http://api.aladhan.com/v1/timingsByCity?city=Kent&country=US&method=2";

    // Make a GET request to the Aladhan API
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the API response and update the state with prayer times
        setPrayerTimes(response.data.data.timings);
      })
      .catch((error) => {
        console.error("Error fetching prayer times:", error);
      });
  }, []);

  return (
    <>
      {/* about the masjid */}
      <section className='prayer'>
        <h1>Prayer Times</h1>
        <div className='prayer-image'>
          <img src={img1} alt="prayer" />
        </div>
        <p>"Indeed, performing prayers is a duty on the believers at the appointed times" (Surah An-Nisa, Verse 103)</p>
      </section>

      {/* Display the prayer times */}
      <section className='prayer-times'>
        <h2>Today's Prayer Times in Kent, Washington</h2>
        <ul>
          <li className="prayer-time-box">Fajr: {prayerTimes.Fajr}</li>
          <li className="prayer-time-box">Dhuhr: {prayerTimes.Dhuhr}</li>
          <li className="prayer-time-box">Asr: {prayerTimes.Asr}</li>
          <li className="prayer-time-box">Maghrib: {prayerTimes.Maghrib}</li>
          <li className="prayer-time-box">Isha: {prayerTimes.Isha}</li>
        </ul>
      </section>
    </>
  );
}

export default Prayer;
