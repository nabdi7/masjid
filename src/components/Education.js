import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <>
        {/* programs or events */}
        <section className="Education">
            <h1>Programs</h1>
            <div className='quran'>
                <h2>Quran Program</h2>
                <p>Explore the divine wisdom of the Holy Quran through our structured courses, expert guidance, and a welcoming community. Join us on a journey of spiritual growth and connection with the Quranic teachings.</p>
            </div>

            <div className='arabic'>
                <h2>Arabic language</h2>
                <p>Learn the language of the Holy Quran and the Prophet Muhammad (PBUH) through our Arabic Program. Our courses are designed to help you understand the Quran and Hadith in their original language.</p>
            </div>
            
            <div className='seminar'>
                <h2>Seminars</h2>
                <p>Learn the language of the Holy Quran and the Prophet Muhammad (PBUH) through our Arabic Program. Our courses are designed to help you understand the Quran and Hadith in their original language.</p>
            </div>
        </section>

        <section className='events'>
            {/* calendar events integration */}
            <h1>Events happening</h1>
        </section>
        
        </>

    );

}

export default Education;