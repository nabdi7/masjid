import React, { useState } from "react";
import "./Services.css";
import { Link, useNavigate } from 'react-router-dom';
import img2 from '../images/pic1.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import {RiParentFill} from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookQuran, faPeopleGroup, faBed, faHeart, faLanguage } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const navigate = useNavigate();
  const [setFormSubmitted] = useState(false);
  const [setContactMessage] = useState('');
  const [setName] = useState('');
  const [setPhone] = useState('');
  const [setEmail] = useState('');
  const [setMessage] = useState('');

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
              <Link to="#" className='service-button register' onClick={scrollToServices}>Register</Link>
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
              <Link to="#" className='service-button register' onClick={scrollToServices}>Register</Link>
            </div>
          </div>
          <div className='services-section'>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faHeart} style={{ color: '#038000' }} />
                </div>
              <h2 className='services-box-title'>Marriage Services</h2>
              <p className='services-description'>For those seeking marital bliss, 
              our Marriage Services offer guidance, support, and counseling. 
              Our experienced professionals are dedicated to assisting couples on 
              their journey to a harmonious and fulfilling marriage.</p>
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
              <p className='services-description'>Our Parental Support services provide 
              guidance and assistance to parents facing challenges in raising their children. 
              Our professionals understand the unique needs of Muslim families and offer 
              support to foster a nurturing and positive environment for children.</p>
            </div>
            <div className='services-box'>
                <div className='icons'>
                    <FontAwesomeIcon icon={faBed} style={{color: "#038000",}} />
                </div>
              <h2 className='services-box-title'>Funeral Services</h2>
              <p className='services-description'><b>We belong to Allah and to Allah we shall return.</b> 
              We provide support and assistance in arranging funeral services for departed loved ones. <b>Please call the Masjid to arrange Funeral</b></p>
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
                <a href='https://www.google.com/maps/place/Masjid+Al-Hudaa/@47.3711705,-122.2084218,17z/data=!3m1!4b1!4m6!3m5!1s0x54905eb5bf39c87b:0xd97531dae44de0bb!8m2!3d47.3711705!4d-122.2058469!16s%2Fg%2F11c6rj9270?entry=ttu'> Kent, WA</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Services;
