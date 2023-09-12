import React from "react";
import "./Prayer.css";
import img1 from '../images/pic9.webp';
import img2 from '../images/pic1.jpg';

const Prayer = () => {
  return (
    <>
      {/* about the masjid */}
      <div className="title-background">
            <img src={img2} alt="Masjid" className='masjid-image' />
            <h1>Prayer Times</h1>
        </div>
      <section className='prayer'>
        {/* <h1>Prayer Times</h1> */}
        <div className='prayer-image'>
          <img src={img1} alt="prayer" />
        </div>
        <p>"Indeed, performing prayers is a duty on the believers at the appointed times" (Surah An-Nisa, Verse 103)</p>
      </section>

      {/* Display the prayer times */}
      <section className='prayer-times'>
        <iframe
          style={{
            width: "290px",
            height: "358px",
            border: "1px solid #ddd",
          }}
          scrolling="no"
          src="https://www.islamicfinder.org/prayer-widget/"
        ></iframe>
      </section>
    </>
  );
}

export default Prayer;
