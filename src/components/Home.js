import React from "react";
import "./Home.css";
import logo from "../images/main.jpg";

const Home = () => {
    return (
        <>
        <div className="background-image">
            <img src={logo} className="main-image" alt="logo" />
            <div className="background-text">
                <h1>Welcome to Al Huda Mosque</h1>
                <p>Al Huda Mosque is a non-profit organization that 
                    serves the Muslim community in Kent, Washington.</p>
            </div>
        </div>

        <section className="services">

        </section>
        
        </>

    );

}

export default Home;