import React from "react";
import "./Home.css";
import logo from "../images/main.jpg";

const Home = () => {
    return (
        <>
        {/* sliding show background */}
        
        <div className="background-image">
            {/* <img src={logo} className="main-image" alt="logo" /> */}
            <div className="background-text">
                <h1>Welcome to Al Huda Mosque</h1>
                <p>In the name of Allah .</p>
                <p>Al Huda Mosque is a non-profit organization that 
                    serves the Muslim community in Kent, Washington.</p>
            </div>
        </div>

        {/* services */}
        <section className="services">

        </section>

        {/* prayer times */}
        <section className="prayer">


        </section>


        {/* gallery */}
        <section className="gallery">

        </section>

        </>

    );

}

export default Home;