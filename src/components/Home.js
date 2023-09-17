import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faPeopleGroup, faBed, faHeart } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/front.jpeg';
import img2 from '../images/interior2.jpeg';
import img3 from '../images/interior1.jpeg';
import img4 from '../images/interior3.jpeg';
import backCover from '../images/pic1.jpg';

const Home = () => {
    const navigate = useNavigate();
    
    const scrollToAbout = (event) => {
        event.preventDefault();
        navigate('/services');
        window.scrollTo(0, 0);
    };
    const scrollToServices = (event) => {
        navigate('/services');
        window.scrollTo(0, 0);
    };
    
    return (
        <>
        {/* sliding show background */}
        <div className='background-image'>
            <h1 className='title'>Welcome to Al Huda Mosque</h1>
            {/* <h1>﷽</h1> */}
            {/* <h1>"AND ALLAH INVITES TO THE HOME OF PEACE” Surah Yunus", Verse 25</h1> */}
            <h1 className='subheading'>In the name of Allah, the most gracious, most merciful.</h1>
            {/* <p className='description'>Al Huda Mosque is a non-profit organization that 
                serves the Muslim community in Kent, Washington.</p> */}
            <Link to="/about" className='button home-button' onClick={scrollToAbout}>Learn More</Link>
        </div>

        {/* services */}
        <section className='home-services'>
            <h1 className='home-services-title'>Our Services</h1>
            <h1 className='home-services-description'>Serving Our Community</h1>
            <div className='home-services-container'>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faBookQuran} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='home-services-box-title'>Quran Program</h1>
                    {/* <p className='home-services-box-description'>Explore the divine 
                    wisdom of the Holy Quran through our structured courses, 
                    expert guidance, and a welcoming community. Join us on a 
                    journey of spiritual growth and connection with the Quranic 
                    teachings.</p> */}
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='home-services-box-title'>Nikkah Services</h1>
                    {/* <p className='home-services-box-description'>Elevate your wedding 
                    day with our Nikkah Services, where we ensure a seamless and 
                    blessed marriage ceremony rooted in Islamic traditions, 
                    creating beautiful memories for couples and their families.
                    </p> */}
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#038000",}} />
                    </div>
                    <h1 className='home-services-box-title'>Halaqas</h1>
                    {/* <p className='home-services-box-description'>Join our Halaqas for 
                    spiritual growth and community connection. These engaging 
                    sessions explore various aspects of Islamic knowledge, 
                    fostering faith, and building lasting bonds among participants.
                    </p> */}
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faBed} style={{color: "#038000",}} />
                    </div>
                    <h1 className='home-services-box-title'>Funeral service</h1>
                    {/* <p className='home-services-box-description'>Our Funeral Services 
                    offer compassionate support during times of loss, preserving 
                    Islamic customs with dignity. We guide families through the 
                    process, providing solace and respectful handling of their 
                    loved ones.
                    </p> */}
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
            </div>
        </section>

        {/* friday prayer times */}
        <section className='prayer'>
            


        </section>


        {/* gallery */}
        <section className='gallery'>
            <h1 className='gallery-title'>Our Gallery</h1>
            <div className='gallery-container'>
                <div className='gallery-box'>
                    <img src={img1} alt="" />
                </div>
                <div className='gallery-box'>
                    <img src={img2} alt="" />
                </div>
                <div className='gallery-box'>
                    <img src={img3} alt="" />
                </div>
                <div className='gallery-box'>
                    <img src={img4} alt="" />
                </div>
             </div>
        </section>

        {/* A masjid for everyone */}
        {/* todo: add a background image */}
        <section className='masjid-everyone'>
            {/* <img src={backCover} alt='background cover'/> */}
            <div className='masjid-everyone-container'>
                <div className='masjid-everyone-box'>
                    <h1 className='masjid-everyone-title'>A MASJID FOR EVERYONE</h1>
                    <p className='masjid-everyone-description'>A welcoming and 
                    inclusive masjid for everyone, fostering community through volunteering</p>
                    <Link to="/about" className='button masjid-everyone-button'>Volunteer</Link>
                </div>
            </div>
        </section>

        </>

    );

}

export default Home;