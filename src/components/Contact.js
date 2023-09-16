import React, { useState } from "react";
import "./Contact.css";
import img1 from '../images/pic1.jpg';
import whatsApp from '../images/whatsapp.png';
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Contact = () => {
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
        {/* about the masjid */}
        <div className="title-background">
            <img src={img1} alt="Masjid" className='masjid-image' />
            <h1>Contact Us</h1>
        </div>
        <section className='contact-page'>
            <div className="contact-container">
                <div className='contact-left'>
                    <div className='contact-inside'>
                        <div className='contact-box'>
                            <div className='contact-icons'>
                                <FaPhone />
                            </div>
                            <div className='contact-information'>
                                <a href='tel:+12068833462'>+1 206 883 3462</a>
                            </div>
                        </div>
                    </div>
                    <div className='contact-inside'>
                        <div className='contact-box'>
                            <div className='contact-icons'>
                                <FaEnvelope />
                            </div>
                            <div className='contact-information'>
                                <a href='mailto:info@qualitydesigns.site' className='email-link'>info@qualitydesigns.site</a>
                            </div>
                        </div>
                    </div>
                    <div className='whatsapp'>
                        <h1> Join our whatsApp group</h1>
                        <img src={whatsApp} alt="Masjid" className='whatsapp-code' />
                    </div>
                    <div className='socials'>
                        <a href="https://www.instagram.com/qd_designs/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                        <a href="https://www.facebook.com/people/Quality-Designs/61550453621801/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com/Qd_designs/" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                    </div>
                </div>
                <div className='contact-right'>
                    <div className='contact-form'>
                        <h3>Get In Touch</h3>
                    <form onSubmit={handleSubmit}>
                        <input type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                        <input
                        type='tel'
                        placeholder='Phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        />
                        <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        />
                        <textarea
                        placeholder='Your Message'
                        rows='5'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        ></textarea>
                        <button className='send-message-button' type='submit'>
                        Send Message
                        </button>
                        {formSubmitted && (
                        <p className='thank-you-message'>
                            We received your inquiry. Thanks!
                        </p>
                        )}
                    </form>
                    </div>
                </div>
            </div>
        </section>
        <div className='location'>
            <div className='location-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1407636.1880612432!2d-123.71677176790475!3d46.44296193832634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905eb5bef4854d%3A0xbae964e553b67d17!2sAlhuda%20islamic%20center!5e0!3m2!1sen!2sus!4v1693886977972!5m2!1sen!2sus" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
        </div>
        </>
    );
}

export default Contact;
