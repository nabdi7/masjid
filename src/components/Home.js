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
                    serves the Muslim community in the greater 
                    Boston area. We are located in the heart of 
                    Cambridge, Massachusetts, close to Harvard 
                    University and MIT.</p>
            </div>
        </div>
        
        </>

    );

}

export default Home;