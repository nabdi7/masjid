import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
        <nav className="Navbar">
            <div className="brand-logo">
                <Link to="/" className="logo">
                    <img src={logo} width="120px" height="auto" max-width="100%" max-height="100%" alt="Logo" />
                </Link>
            </div>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/programs">Programs</Link></li>
                    <li><Link to="/donate" className="active">
                        Donate</Link>
                    </li>
                </ul>
            </div>
        </nav>

        </>
    );
};

export default Navbar;