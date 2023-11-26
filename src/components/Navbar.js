import React, { useState } from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMoreDropdownOpen(false);
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
          <div className='close-menu-icon' onClick={toggleMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <ul>
            <li><Link to="/about" onClick={closeMenu}>About </Link></li>
            <li><Link to="/services" onClick={closeMenu}>Programs</Link></li>
            <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
            <li>
              <Link to="#"  onClick={toggleMoreDropdown}>More <IoMdArrowDropdown className="dropdown-icon" /></Link>
              <ul className={`more-dropdown ${isMoreDropdownOpen ? 'open' : ''}`}>
                <li><Link to="/prayer" onClick={closeMenu}>Prayer Times</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/donate" className='active' onClick={closeMenu}>
                Donate
              </Link>
            </li>
          </ul>
        </div>
        <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'hidden' : ''}`}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
