import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Home.css";

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

        </section>

        {/* prayer times */}
        <section className='prayer'>


        </section>


        {/* gallery */}
        <section className='gallery'>

        </section>

        </>

    );

}

export default Home;