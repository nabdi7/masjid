import React from "react";
import "./About.css";
import img1 from '../images/front.jpeg';

const About = () => {
    return (
        <>
        {/* about the masjid */}
        <section className='about'>
            <h1 className='about-title'>About Us</h1>
            <div className="about-container">
                <div className='about-image'>
                    <img src={img1} alt="front masjid" />
                </div>
                <div className='about-text'>
                    <p>Al Huda Mosque is a non-profit organization that 
                        serves the Muslim community in Kent, Washington. 
                        opened in 2007
                    </p>
                </div>
            </div>

            <div className='board'>
                <div className='board-members'>
                    <h1 className='board-members-title'>Board Members</h1>
                    <div className='board-members-container'>
                        <div className='board-members-box'>
                            <h1 className='board-members-box-title'>President</h1>
                            <p className='board-members-name'>Sheikh Ahmed Nuur</p>
                        </div>
                        <div className='board-members-box'>
                            <h1 className='board-members-box-title'>Vice President</h1>
                            <p className='board-members-name'>Najib Abdi </p>
                        </div>
                        <div className='board-members-box'>
                            <h1 className='board-members-box-title'>Secretary</h1>
                            <p className='board-members-name'>Najib Abdi </p>
                        </div>
                        <div className='board-members-box'>
                            <h1 className='board-members-box-title'>Treasurer</h1>
                            <p className='board-members-name'>Najib Abdi</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        {/* board members */}

        
        </>

    );

}

export default About;