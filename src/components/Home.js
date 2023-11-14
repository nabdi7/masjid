import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faPeopleGroup, faBed, faHeart } from '@fortawesome/free-solid-svg-icons';
import slideShow1 from '../images/main.jpg';
import img2 from '../images/interior2.jpeg';
import img3 from '../images/interior1.jpeg';
import img4 from '../images/interior3.jpeg';
import backCover from '../images/pic1.jpg';

const Home = () => {
    const navigate = useNavigate();

    const scrollToAbout = (event) => { 
        event.preventDefault();
        navigate('/about');
        window.scrollTo(0, 0);
    };

    const scrollToServices = (event) => {
        navigate('/services');
        window.scrollTo(0, 0);
    };

    const scrollToContact = (event) => {
        navigate('/contact');
        window.scrollTo(0, 0);
    };

    const imageInfo = [
        {
            image: slideShow1,
            title: 'WELCOME TO AL HUDA MOSQUE',
            // title: 'Welcome to Al Huda Islamic Center of Kent',
            subheading: 'In the name of Allah, the most gracious, most merciful.',
        },
        {
            image: backCover,
            title: (
                <span>
                    "AND ALLAH INVITES TO THE <br />HOME OF PEACE”
                </span>
            ),
            // subheading: 'Al Huda Mosque is a non-profit organization dedicated to serving the Muslim...',
            subheading: '(Surah Yunus, Verse 25)',
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const slideshowInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageInfo.length);
        }, 4000);

        return () => clearInterval(slideshowInterval);
    }, );
    
    return (
        <>
        {/* sliding show background */}
        <div
            className='background-image'
                style={{
                    backgroundImage: `url(${imageInfo[currentImageIndex].image})`,
                    backgroundPosition: 'right center', 
                }}>
            <h1 className='title'>
                {imageInfo[currentImageIndex].title}
            </h1>
            <h1 className='subheading'>{imageInfo[currentImageIndex].subheading}</h1>
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
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faHeart} style={{ color: '#038000' }} />
                    </div>
                    <h1 className='home-services-box-title'>Nikkah Services</h1>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#038000",}} />
                    </div>
                    <h1 className='home-services-box-title'>Halaqa Program</h1>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
                <div className='home-services-box'>
                    <div className='home-icons'>
                        <FontAwesomeIcon icon={faBed} style={{color: "#038000",}} />
                    </div>
                    <h1 className='home-services-box-title'>Funeral service</h1>
                    <Link to="/services" className='button learn-more' onClick={scrollToServices}>Learn More</Link>
                </div>
            </div>
        </section>

        {/* gallery */}
        <section className='gallery'>
            <h1 className='gallery-title'>Our Gallery</h1>
            <div className='gallery-container'>
                <div className='gallery-box'>
                    <img src={img3} alt="" />
                </div>
                <div className='gallery-box'>
                    <img src={img2} alt="" />
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
                <div className='gallery-box'>
                    <img src={img2} alt="" />
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
                    inclusive masjid for everyone, fostering community through volunteering.</p>
                    <Link to="/contact" className='button masjid-everyone-button' onClick={scrollToContact}>Volunteer</Link>
                </div>
            </div>
        </section>

        </>

    );

}

export default Home;