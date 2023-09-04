import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import img1 from '../images/front.jpeg';
import img2 from '../images/interior2.jpeg';
import img3 from '../images/interior1.jpeg';
import img4 from '../images/interior3.jpeg';

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
            <p className='subheading'>In the name of Allah, the most gracious, most merciful.</p>
            <p className='description'>Al Huda Mosque is a non-profit organization that 
                serves the Muslim community in Kent, Washington.</p>
            <Link to="/about" className='button home-button' onClick={scrollToAbout}>Learn More</Link>
        </div>

        {/* services */}
        <section className='services'>
            <h1 className='services-title'>Our Services</h1>
            <h1 className='services-description'>Serving Our Community</h1>
            <div className='services-container'>
                <div className='services-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={faBookQuran} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='services-box-title'>Quran Program</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.</p>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='services-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={farHeart} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='services-box-title'>Nikkah Services</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.
                    </p>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='services-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={farHeart} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='services-box-title'>Halaqas</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.
                    </p>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='services-box'>
                    <div className='icons'>
                        <FontAwesomeIcon icon={farHeart} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='services-box-title'>Funeral service</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.
                    </p>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
            </div>
        </section>

        {/* prayer times */}
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
        <section className='masjid-everyone'>
            <div className='masjid-everyone-container'>
                <div className='masjid-everyone-box'>
                    <h1 className='masjid-everyone-title'>A MASJID FOR EVERYONE</h1>
                    <p className='masjid-everyone-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.</p>
                    <Link to="/about" className='button masjid-everyone-button'>Volunteer</Link>
                </div>
            </div>
        </section>

        </>

    );

}

export default Home;