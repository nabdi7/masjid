import React from "react";
import "./Donate.css";
import img1 from '../images/qr.png';

const Donate = () => {
    return (
        <>
        {/* donation */}
        <section className="donate">
            <div className='donate-container'>
                <h1 className='donate-title'>Donation</h1>
                <p>Whoever builds a masjid for the sake of Allah, 
                    Allah will build for hime a house like it in paradise 
                </p>
            </div>

            <div className='donate-scan'>
                {/* the qr codes are sample not real ones */}
                <div className='qr-code'>
                    <h1>Zelle</h1>
                    <img src={img1} alt="zelle" />
                </div>

                <div className='qr-code'>
                    <h1>Paypal</h1>
                    <img src={img1} alt="paypal" />
                </div>

                <div className='qr-code'>
                    <h1>CashApp</h1>
                    <img src={img1} alt="cashapp" />
                </div>

            </div>
            
        </section>
        
        </>

    );

}

export default Donate;