import React, { useState }  from "react";
import "./Prayer.css";
import img1 from '../images/pic9.webp';
import img2 from '../images/pic1.jpg';

const Prayer = () => {
  // Define the prayer times
  const [prayerTimes] = useState({
    firstJummah: '1:30PM',
    secondJummah: '2:00PM',
  });
  return (
    <>
      {/* about the masjid */}
      <div className="title-background">
          <img src={img2} alt="Masjid" className='masjid-image' />
          <h1>Prayer Times</h1>
      </div>
      <section className='prayer'>
        <div className='prayer-image'>
          <img src={img1} alt="prayer" />
        </div>
        <p>
          "Indeed, performing prayers is a duty on the believers at the appointed times"{" "}
          <div className="quran-verse"><b>(Qur'an 4, Verse 103)</b></div>
        </p>
      </section>

      {/* Friday Prayer Times */}
      <div className='friday-prayer'>
        <h1 className='friday-title'>Friday Prayer:</h1>
        <h5 className='prayer-subtitle'>1<sup>st</sup> Jummah: {prayerTimes.firstJummah}</h5>
        <h5 className='prayer-subtitle'>2<sup>nd</sup> Jummah: {prayerTimes.secondJummah}</h5>
      </div>

      {/* Display the prayer times */}
      <section className='prayer-times'>
        <div className='prayer-widget'>
          <iframe 
          src="https://timing.athanplus.com/masjid/widgets/embed?theme=1&masjid_id=0Lbp1Ndo&color=038000" 
          type="text/html" 
          width="100%" 
          height="560" 
          frameborder="0" 
          allowtransparency="true"
          ></iframe>
        </div>
      </section>
    </>
  );
}

export default Prayer;
