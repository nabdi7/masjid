import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <>
        {/* about the masjid */}
        <section className='contact'>
            <div className='contact-container'>
                <h1>Contact Us</h1>
                <div className='contact-section'>
                    <div className='contact-box'>
                        <div className='contact-box-icon'>
                            <i className='fas fa-phone-alt'></i>
                        </div>
                        <div className='contact-box-title'>
                            <h3>Phone</h3>
                        </div>
                        <div className='contact-box-description'>
                            <p>+1 123 456 7890</p>
                        </div>
                    </div>
                    <div className='contact-box'>
                        <div className='contact-box-icon'>
                            <i className='fas fa-phone-alt'></i>
                        </div>
                        <div className='contact-box-title'>
                            <h3>Email</h3>
                        </div>
                        <div className='contact-box-description'>
                            <p>+1 123 456 7890</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className='contact-form'>
                <form action="">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="phone" placeholder='Phone' />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                    <input type="submit" value="Send Message" className='button' />
                </form>
            </div>

            <div className='location'>
                <h1>Location</h1>
                <div className='location-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1407636.1880612432!2d-123.71677176790475!3d46.44296193832634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905eb5bef4854d%3A0xbae964e553b67d17!2sAlhuda%20islamic%20center!5e0!3m2!1sen!2sus!4v1693886977972!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>

           
        </section>
        
       

        
        </>

    );

}

export default Contact;