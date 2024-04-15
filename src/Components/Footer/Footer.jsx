import React from "react";
import "./Footer.css";
import video2 from '../../Assets/waterfalls.mp4';
import { FiSend, FiInstagram, FiMail } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";

const Footer = () => {
    return (
        <section className='footer'>
            <div className='secContent container'>
                <div className="quote-container">
                    <p className="quote">
                        <span>"Once a year go somewhere you have never been before." — Dalai Lama</span></p>
                        <p1><span>Travel Planner, Happy planner !</span></p1>
                </div>
                <div className="contact-info">
                    <p className="email">
                        <FiMail className="icon" style={{ color: '#2D9596' }} /><b>Email us at:</b> <a href="mailto:travel@example.com" style={{ color: '#2D9596' }}>travel@example.com</a>
                    </p>
                    <p className="phone">
                        <FiSend className="icon" style={{ color: '#2D9596' }} /><b>Call us:</b> <span style={{ color: '#2D9596' }}>+123 456 7890</span>
                    </p>
                    <p className="instagram">
                        <FiInstagram className="icon" style={{ color: '#2D9596' }} /> <b>Follow us on Instagram:</b> <a href="https://instagram.com/travel" style={{ color: '#2D9596' }}>Travel Planner</a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
