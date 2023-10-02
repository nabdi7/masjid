import React, { useState } from "react";
import "./Services.css";
import { Link, useNavigate } from 'react-router-dom';
import img2 from '../images/pic1.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import {RiParentFill} from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faPeopleGroup, faBed, faHeart, faLanguage } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setTimeout(() => {
      setFormSubmitted(true);
      setContactMessage('We got your message. Thanks!');
      setTimeout(() => {
        setContactMessage('');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setFormSubmitted(false);
      }, 2000);
    }, 1000);
  };

  const scrollToServices = (event) => {
    event.preventDefault();
    navigate('/services');
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="title-background">
        <img src={img2} alt="Masjid" className='masjid-image' />
        <h1>Programs</h1>
      </div>
      <section className="services">
        <div className='services-container'>
          <div className='services-section'>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faBookQuran} style={{ color: '#038000' }} />
                </div>
              <h2 className='services-box-title'>Quran Program</h2>
              <p className='services-description'>Explore the divine
                wisdom of the Holy Quran through our structured courses,
                expert guidance, and a welcoming community. Join us on a
                journey of spiritual growth and connection with the Quranic
                teachings.</p>
              <Link to="/" className='button register' onClick={scrollToServices}>Register</Link>
            </div>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faLanguage} style={{color: "#038000",}} />
                </div>
              <h2 className='services-box-title'>Arabic language</h2>
              <p className='services-description'>Learn the
                language of the Holy Quran and the Prophet Muhammad (PBUH)
                through our Arabic Program. Our courses are designed to
                help you understand the Quran and Hadith in their original
                language.</p>
              <Link to="/" className='button register' onClick={scrollToServices}>Register</Link>
            </div>
          </div>
          <div className='services-section'>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faHeart} style={{ color: '#038000' }} />
                </div>
              <h2 className='services-box-title'>Marriage Services</h2>
              <p className='services-description'>We offer confidential
                counseling services for members of our community who are
                experiencing personal or family difficulties. Our
                counseling services are provided by qualified and
                experienced professionals who are sensitive to the
                unique needs of the Muslim community.</p>
            </div>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#038000",}} />
                </div>
              <h2 className='services-box-title'>Counseling Services</h2>
              <p className='services-description'>We offer confidential
                counseling services for members of our community who are
                experiencing personal or family difficulties. Our
                counseling services are provided by qualified and
                experienced professionals who are sensitive to the
                unique needs of the Muslim community.</p>
            </div>
          </div>
          <div className='services-section'>
            <div className='services-box'>
                <div className='icons'>
                    <RiParentFill style={{color: "#038000",}} />
                </div>
              <h2 className='services-box-title'>Parental Support</h2>
              <p className='services-description'>We offer confidential
                counseling services for members of our community who are
                experiencing personal or family difficulties. Our
                counseling services are provided by qualified and
                experienced professionals who are sensitive to the
                unique needs of the Muslim community.</p>
            </div>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faBed} style={{color: "#038000",}} />
                </div>
              <h2 className='services-box-title'>Funeral Services</h2>
              <p className='services-description'>We offer confidential
                counseling services for members of our community who are
                experiencing personal or family difficulties. Our
                counseling services are provided by qualified and
                experienced professionals who are sensitive to the
                unique needs of the Muslim community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* get in touch */}
      <section className='contacted-sections'>
        <div className='contacted-details'>
          <div className='contacted-item'>
            <div className='contacted-box'>
              <div className='contacted-icon'>
                <FaPhone />
              </div>
              <div className='contacted-info'>
                <a href='tel:+12068833462'>+1 206 883 3462</a>
              </div>
            </div>
          </div>
          <div className='contacted-item'>
            <div className='contacted-box'>
              <div className='contacted-icon'>
                <FaEnvelope />
              </div>
              <div className='contacted-info'>
                <a href='mailto:info@qualitydesigns.site' className='email-link'>info@alhudamasjid.com</a>
              </div>
            </div>
          </div>
          <div className='contacted-item'>
            <div className='contacted-box'>
              <div className='contacted-icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='contacted-info'>
                <a href='https://goo.gl/maps/oQHJCMPBP9Tqk1Tq5'> Kent, WA</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Services;
