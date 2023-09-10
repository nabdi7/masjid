import React from "react";
import "./Services.css";
import img1 from '../images/pic8.png';
import nikkah from '../images/nikaah.jpeg'
import counseling from '../images/counseling.jpeg'
import parental from '../images/parental.webp'
import burial from '../images/burial.jpg'

const Services = () => {
    return (
        <>
        <section className="Services">
            <div className='services-image'>
                <img src={img1} alt="services image" />
            </div>
            <h1>Services</h1>

            {/* Counseling Services:We offer confidential counseling 
            services for members of our community who are experiencing 
            personal or family difficulties. Our counseling services are 
            provided by qualified and experienced professionals who are 
            sensitive to the unique needs of the Muslim community.  */}
            <div className='services-container'>
                <div className='services-section'>
                    <div className='services-box'>
                        <h2>Marriage Services</h2>
                        <p>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                        <div className='box-image'>
                            <img src={nikkah} alt="" />
                        </div>
                    </div>
                </div>
                <div className='services-section'>
                    <div className='services-box'>
                        <div className='box-image'>
                            <img src={counseling} alt="" />
                        </div>
                        <h2>Counseling Services</h2>
                        <p>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                    </div>
                </div>
                <div className='services-section'>
                    <div className='services-box'>
                        <h2>Parental Support</h2>
                        <p>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                        <div className='box-image'>
                            <img src={parental} alt="" />
                        </div>
                    </div>
                </div>
                <div className='services-section'>
                    <div className='services-box'>
                        <div className='box-image'>
                            <img src={burial} alt="" />
                        </div>
                        <h2>Funeral Services</h2>
                        <p>We offer confidential counseling services for members of our community who are experiencing personal or family difficulties. Our counseling services are provided by qualified and experienced professionals who are sensitive to the unique needs of the Muslim community.</p>
                    </div>
                </div>
            </div>

        </section>
        

        {/* get in touch */}
        <section className='get-in-touch'>
            <h1>Get in touch</h1>
            <div className='get-in-touch-container'>
                <div className='get-in-touch-box'>
                    <h2>Address</h2>
                    <p>1234 Main Street, Anytown, USA</p>
                </div>
                <div className='get-in-touch-box'>
                    <h2>Phone</h2>
                    <p>123-456-7890</p>
                </div>
                <div className='get-in-touch-box'>
                    <h2>Email</h2>
                    <p> alhuda@masjid.com </p>
                </div>
            </div>
        </section>
        
        </>

    );

}

export default Services;