import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import img1 from '../images/pic1.jpg';
import whatsApp from '../images/whatsapp.png';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { IoLogoYoutube } from "react-icons/io";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactMessage, setContactMessage] = useState("");
  const [user_name, setName] = useState(""); 
  const [user_email, setEmail] = useState(""); 
  const [user_phone, setPhone] = useState(""); 
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e615ubi", "template_6wnifn3", formRef.current, "XdjzZbnaWuPXzJGcw")
      .then(
        (result) => {
          console.log("Email sent successfully:", result);
          setFormSubmitted(true);
          setContactMessage("We got your message. Thanks!");
          setTimeout(() => {
            setContactMessage("");
            setName("");
            setPhone("");
            setEmail("");
            setMessage("");
            setFormSubmitted(false);
          }, 2000);
        },
        (error) => {
          console.error("Email sending failed:", error);

        }
      );
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
                  <a href='tel:+12536352310'>+1 253 635 2310</a>
                </div>
              </div>
            </div>
            <div className='contact-inside'>
              <div className='contact-box'>
                <div className='contact-icons'>
                  <FaEnvelope />
                </div>
                <div className='contact-information'>
                  <a href='mailto:info@alhudamasjid.com' className='email-link'>info@alhudamasjid.com</a>
                </div>
              </div>
            </div>
            <div className='whatsapp'>
              <p className='whatsapp-title'> Join our WhatsApp </p>
              <img src={whatsApp} alt="Masjid" className='whatsapp-code' />
              <div className='socials-box'>
                <a href="" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="" target="_blank" rel="noopener noreferrer"><IoLogoYoutube /></a>
              </div>
            </div>
          </div>
          <div className='contact-right'>
            <div className='contact-form'>
              <h3 class='box-title'>Get In Touch</h3>
              <form ref={formRef} onSubmit={sendEmail}>
                <input
                  type='text'
                  placeholder='Name'
                  name='user_name' 
                  value={user_name} 
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type='tel'
                  placeholder='Phone'
                  name='user_phone' 
                  value={user_phone} 
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='user_email' 
                  value={user_email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <textarea
                  placeholder='Your Message'
                  rows='5'
                  name='message' 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
                <button className='send-message-button' type='submit'>
                  Send Message
                </button>
                {formSubmitted && (
                  <h6 className='thank-you-message'>
                    We received your inquiry. Thanks!
                  </h6>
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
