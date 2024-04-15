import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a travel company dedicated to helping you plan your dream vacations and create unforgettable memories.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>
            123 Travel Lane<br />
            City, Country<br />
            <a href="mailto:info@travelplanner.com">info@travelplanner.com</a><br />
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </p>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/travelplanner"><FaFacebook /></a>
            <a href="https://twitter.com/travelplanner"><FaTwitter /></a>
            <a href="https://instagram.com/travel"><FaInstagram /></a>
            <a href="https://youtube.com/travelplanner"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Planner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;