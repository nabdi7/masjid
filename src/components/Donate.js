import React from "react";
import "./Donate.css";
import { SiCashapp, SiZelle, SiPaypal } from 'react-icons/si';
import img1 from '../images/qr.png';
import img2 from '../images/pic1.jpg';


const Donate = () => {
    return (
        <>
        {/* donation */}
        <div className="title-background">
            <img src={img2} alt="Masjid" className='masjid-image' />
            <h1>Donation</h1>
        </div>
        <section className="donate">
            <div className='donate-container'>
                <p className="quote">"Whoever builds a masjid for the sake of Allah, 
                    Allah will build for him a house like it in paradise". 
                    <div className="hadith-verse"><b>(Sahih al-Bukhari 450)</b></div>
                </p>
            </div>

            <div className='donate-scan'>
                {/* the qr codes are sample not real ones */}
                <div className='qr-container'>
                    <div className='qr-code'>
                        <div className='pay-icon'>
                            <SiZelle />
                        </div>
                        <h1>Zelle</h1>
                        <img src={img1} alt="zelle" />
                        <p>12345678910</p>
                        <p>alhuda@masjid.com</p>
                    </div>
                </div>
                <div className='qr-container'>
                    <div className='qr-code'>
                        <div className='pay-icon'>
                            <SiPaypal />
                        </div>
                        <h1>Paypal</h1>
                        <img src={img1} alt="paypal" />
                        <p>12345678910</p>
                        <p>alhuda@masjid.com</p>
                    </div>
                </div>
                <div className='qr-container'>
                    <div className='qr-code'>
                        <div className='pay-icon'>
                            <SiCashapp />
                        </div>
                        <h1>CashApp</h1>
                        <img src={img1} alt="cashapp" />
                        <p>12345678910</p>
                        <p>alhuda@masjid.com</p>
                    </div>
                </div>
            </div>
            
        </section>
        
        </>

    );

}

export default Donate;