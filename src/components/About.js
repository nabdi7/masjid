import React from "react";
import "./About.css";
// import img1 from '../images/front.jpeg';
import img1 from '../images/front.jpeg';
import img2 from '../images/pic3.jpg';
import boardImage1 from '../images/board2.jpg'

const About = () => {
    return (
        <>
        {/* about the masjid */}
        <section className='about'>
            <div className='banner-image'>
                <img src={img2} alt="banner masjid" />
            </div>
            <h1 className='about-title'>About Us</h1>
            <div className="about-container">
                <div className='about-image'>
                    <img src={img1} alt="front masjid" />
                </div>
                <div className='about-text'>
                    <p>Al Huda Mosque is a non-profit organization that 
                        serves the Muslim community in Kent, Washington. 
                    </p>
                    <p> It was opened in 2007 </p>
                </div>
            </div>
        </section>

        <section className="board">
            <h2 className='board-title'>Board Members</h2>
            <span className='underline'>
                
            </span>
            <div className="board-members">
                <div className="board-member">
                    <div className="board-member__image">
                        <img src={boardImage1} alt="Founder" />
                    </div>
                    <div className="board-member__body">
                        <h3 className="board-member__title">Sheikh Ahmed Nuur</h3>
                        <p className="board-member__subtitle">President</p>
                    </div>
                </div>
                <div className="board-member">
                    <div className="board-member__image">
                        <img src={boardImage1} alt="Founder" />
                    </div>
                    <div className="board-member__body">
                        <h3 className="board-member__title">Sheikh Ahmed Nuur </h3>
                        <p className="board-member__subtitle">Vice President</p>
                    </div>
                </div>
                <div className="board-member">
                    <div className="board-member__image">
                        <img src={boardImage1} alt="Founder" />
                    </div>
                    <div className="board-member__body">
                        <h3 className="board-member__title">Sheikh Ahmed Nuur</h3>
                        <p className="board-member__subtitle">Secretary</p>
                    </div>
                </div>
                <div className="board-member">
                    <div className="board-member__image">
                        <img src={boardImage1} alt="Founder" />
                    </div>
                    <div className="board-member__body">
                        <h3 className="board-member__title">Sheikh Ahmed Nuur</h3>
                        <p className="board-member__subtitle">Treasurer</p>
                    </div>
                </div>
                <div className="board-member">
                    <div className="board-member__image">
                        <img src={boardImage1} alt="Founder" />
                    </div>
                    <div className="board-member__body">
                        <h3 className="board-member__title">Sheikh Ahmed Nuur</h3>
                        <p className="board-member__subtitle">Treasurer</p>
                    </div>
                </div>
            </div>
      </section>

        
        </>

    );

}

export default About;