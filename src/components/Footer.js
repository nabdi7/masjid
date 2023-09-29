import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Footer.css";
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import logo from "../images/logo.png";

const Footer = () => {
    const navigate = useNavigate();
    const scrollToHome = (event) => {
        event.preventDefault();
        navigate('/');
        window.scrollTo(0, 0);
    };
    return (
        <>
        <footer className='footer'>
            <div className='footer-container'>
                <div className="logo-container">
                    <Link to="/" className='footer-logo' onClick={scrollToHome}>
                        <img src={logo} width='120px' height='auto' max-width='100%' max-height='100%' alt='Logo' />
                    </Link>
                </div>

                <div className='footer-menu'>
                    <h1 className='menu-title'>Al Huda</h1>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/programs">Programs</Link></li>
                        <li><Link to="/donate">Prayer Times</Link></li>
                    </ul> 
                </div>

                <div className='footer-menu'>
                    <h1 className='menu-title'>Resources</h1>
                    <ul>
                        <li><Link to="/donate">Mental help</Link></li>
                        <li><Link to="/contact">Youth</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div className='get-in-touch'>
                    <h1 className='menu-title'> Get in touch </h1>
                    <div className='socials'>
                        <a href="https://www.facebook.com/people/Quality-Designs/61550453621801/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                        <a href="https://www.instagram.com/qd_designs/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                    </div>
                </div>
                <div className='line'></div>

            </div>
            <div className="copyright">
                    <p>Made by <a href="https://qualitydesigns.site/" target="_blank" rel="noopener noreferrer" style={{ color: 'black', fontWeight: 'bold'}}>Quality Designs</a> || ©{new Date().getFullYear()} Masjid Al Huda. All Rights Reserved.</p>
            </div>
            
        </footer>
        
        </>

    );

}


export default Footer;