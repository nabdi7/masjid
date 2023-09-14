import React from "react";
import "./About.css";
// import img1 from '../images/front.jpeg';
import img1 from '../images/front.jpeg';
import img2 from '../images/main.jpg';
import boardImage1 from '../images/board2.jpg'

const About = () => {
    return (
        <>
        {/* about the masjid */}
        <div className="title-background">
            <img src={img2} alt="Masjid" className='masjid-image' />
            <h1>About Us</h1>
        </div>
        <section className='about'>
            {/* <h1 className='about-title'>About Us</h1> */}
            <div className="about-container">
                <div className='about-image'>
                    <img src={img1} alt="front masjid" />
                </div>
                <div className='about-text'>
                    <p>
                        Al Huda Mosque is a non-profit organization dedicated 
                        to serving the Muslim community in Kent, Washington. 
                        Established in 2007, our mission is to provide a welcoming 
                        and inclusive environment for all members of our community 
                        to worship, learn, and grow together. We are committed to 
                        meeting the diverse needs of our community and promoting 
                        unity and understanding among our members.
                    </p>
                </div>
            </div>
        </section>

        <section className="board">
            <h2 className='board-title'>Board Members</h2>
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