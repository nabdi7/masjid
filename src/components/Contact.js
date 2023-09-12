import React from "react";
import "./Contact.css";
import img1 from '../images/pic3.jpg';
import whatsApp from '../images/whatsapp.png';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';

const Contact = () => {
    return (
        <>
        {/* about the masjid */}
        <section className='contact'>
            <h1>Contact Us</h1>
            <div className='contact-container'>
                <div className='contact-left'>
                    <div className='contact-box-horizontal'>
                        <div className='contact-box'>
                            <div className='contact-box-icon'>
                                <FaPhone />
                            </div>
                            <div className='contact-box-description'>
                                <a href='tel:+12345648910'>+1 234 567 8910</a>
                            </div>
                        </div>
                        <div className='contact-box'>
                            <div className='contact-box-icon'>
                                <FaEnvelope />
                            </div>
                            <div className='contact-box-description'>
                                <a href='mailto:' className='email-link'>alhuda@masjid.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='social-icons'>
                        <a href="https://www.instagram.com/qd_designs/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                        <a href="https://www.facebook.com/people/Quality-Designs/61550453621801/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com/Qd_designs/" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
                    </div>
                    <div className='whatsapp'>
                        <h4>Join our WhatsApp group</h4>
                        <img src={whatsApp} alt="WhatsApp QR Code" className="whatsapp-image" />
                    </div>
                </div>
                <div className='contact-right'>
                    <div className='contact-form'>
                        <form action="">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="tel" placeholder='Phone' /> {/* Use type "tel" for phone input */}
                            <textarea name="message" cols="30" rows="10" placeholder='Your Message'></textarea>
                            <input type="submit" value="Send Message" className='button' />
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
