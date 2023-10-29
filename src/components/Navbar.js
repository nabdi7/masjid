import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

    <nav className={`Navbar ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
    
      <div className='brand-logo'>
        <Link to="/" className='logo'>
          <img src={logo} width='120px' height='auto' max-width='100%' max-height='100%' alt='Logo' />
        </Link>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        {/* Close icon to hide the menu */}
        <div className='close-menu-icon' onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </div>

        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Programs</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li>
            <Link to="#">More</Link>
            <ul className='more-dropdown'>
              <li><Link to="/prayer">Prayer Times</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/donate" className='active'>
              Donate
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {/* Bars icon to open the menu */}
        <div className={`bar ${isMenuOpen ? 'hidden' : ''}`}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
    
    </>
  );
};

export default Navbar;
