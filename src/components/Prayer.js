import React from "react";
import "./Prayer.css";
import img1 from '../images/pic9.webp';

const Prayer = () => {
    return (
        <>
        {/* about the masjid */}
        <div className='Prayer'>
            <h1>Prayer Times</h1>
            <div className='prayer-image'>
                <img src={img1} alt="prayer" />
            </div>
            <p> "Indeed, performing prayers is a duty on the believers at the 
                appointed times" (Surah An-Nisa, Verse 103)
            </p>

            
        </div>
        
        {/* board members */}

        
        </>

    );

}

export default Prayer;