import React, { useState }  from "react";
import "./Services.css";
import img1 from '../images/pic8.png';
import nikkah from '../images/nikaah.jpeg'
import counseling from '../images/counseling.jpeg'
import parental from '../images/parental.webp'
import burial from '../images/burial.jpg'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Services = () => {
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
    return (
        <>
        <section className="services">
            <h1 className='services-title'>Services</h1>
            <div className='services-image'>
                <img src={img1} alt="services image" />
            </div>
            <div className='services-container'>
                <div className='services-section'>
                    <div className='services-box'>
                        <h2 className='services-box-title'>Marriage Services</h2>
                        <p className='services-description'>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                    </div>
                    <div className='box-image'>
                        <img src={nikkah} alt="" />
                    </div>
                </div>
                <div className='services-section'>
                    <div className='box-image'>
                        <img src={counseling} alt="" />
                    </div>
                    <div className='services-box'>
                        <h2 className='services-box-title'>Counseling Services</h2>
                        <p className='services-description'>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                    </div>
                </div>
                <div className='services-section'>
                    <div className='services-box'>
                        <h2 className='services-box-title'>Parental Support</h2>
                        <p className='services-description'>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                    </div>
                    <div className='box-image'>
                        <img src={parental} alt="" />
                    </div>
                </div>
                <div className='services-section'>
                    <div className='box-image'>
                        <img src={burial} alt="" />
                    </div>
                    <div className='services-box'>
                        <h2 className='services-box-title'>Funeral Services</h2>
                        <p className='services-description'>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
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
                        <a href='mailto:info@qualitydesigns.site' className='email-link'>info@qualitydesigns.site</a>
                        </div>
                    </div>
                </div>
                <div className='contacted-item'>
                    <div className='contacted-box'>
                        <div className='contacted-icon'>
                        <FaMapMarkerAlt />
                        </div>
                        <div className='contacted-info'>
                        <a href='https://goo.gl/maps/oQHJCMPBP9Tqk1Tq5'>Seattle, WA</a>
                        {/* <p>Seattle, WA</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>

    );

}

export default Services;