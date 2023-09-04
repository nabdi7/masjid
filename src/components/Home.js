import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
    const navigate = useNavigate();
    
    const scrollToAbout = (event) => {
        event.preventDefault();
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
            <p className='services-description'>Serving Our Community</p>
            <div className='services-container'>
                <div className='services-box'>
                    <FontAwesomeIcon icon={faBookQuran} style={{ color: '#038000' }} />
                    <h1 className='services-box-title'>Quran Program</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.</p>
                </div>
                <div className='services-box'>
                    <FontAwesomeIcon icon={farHeart} style={{ color: '#038000' }} />
                    <h1 className='services-box-title'>Nikkah Services</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.</p>
                </div>
                <div className='services-box'>
                    <h1 className='services-box-title'>Halaqas</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.</p>
                </div>
                <div className='services-box'>
                    <h1 className='services-box-title'>Funeral service</h1>
                    <p className='services-box-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quisquam, voluptate.</p>
                </div>
            </div>
        </section>

        {/* prayer times */}
        <section className='prayer'>
            


        </section>


        {/* gallery */}
        <section className='gallery'>
            {/* <h1 className='gallery-title'>Gallery</h1>
            <div className='gallery-container'>
                <div className='gallery-box'>
                    <img src='https://images.unsplash.com/photo-1581093458794-8d1f0b3b6c7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9zY2lkJTIwY2FyJTIwYmVzdCUyMG1vcmUlMjBzaG9ydCUyMGNvbXBsZXRlJTIwY29tcGFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='gallery' />
                </div>
                <div className='gallery-box'>
                    <img src='https://images.unsplash.com/photo-1581093458794-8d1f0b3b6c7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9zY2lkJTIwY2FyJTIwYmVzdCUyMG1vcmUlMjBzaG9ydCUyMGNvbXBsZXRlJTIwY29tcGFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='gallery' />
                </div>
                <div className='gallery-box'>
                    <img src='https://images.unsplash.com/photo-1581093458794-8d1f0b3b6c7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9zY2lkJTIwY2FyJTIwYmVzdCUyMG1vcmUlMjBzaG9ydCUyMGNvbXBsZXRlJTIwY29tcGFueXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='gallery' />
                </div>
             </div> */}
        </section>

        </>

    );

}

export default Home;