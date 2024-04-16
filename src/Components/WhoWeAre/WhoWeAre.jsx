
import React from 'react';
import './WhoWeAre.css'

const WhoWeAre = () => {
    return (
      <div className="container">
        <h1>Who We Are</h1>
        <p>
          At Travel Planner, we are passionate about helping you create unforgettable travel experiences. With our expertise and dedication, we strive to make your journey seamless and memorable.
        </p>
        
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to inspire and empower travelers to explore the world with confidence. We believe that travel has the power to broaden horizons, foster cultural understanding, and create lifelong memories.
          </p>
        </div>
        
        <div className="values">
          <h2>Our Values</h2>
          <ul>
            <li>Integrity: We uphold the highest standards of honesty and transparency in all our interactions.</li>
            <li>Excellence: We constantly strive to deliver exceptional service and exceed your expectations.</li>
            <li>Passion: We are driven by our love for travel and our commitment to making your dreams a reality.</li>
            <li>Innovation: We embrace creativity and continuously seek new ways to enhance your travel experience.</li>
          </ul>
        </div>
        
        <div className="team">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced travel professionals who are dedicated to providing you with personalized assistance and expert guidance. With their extensive knowledge and passion for travel, they are ready to help you plan the perfect trip.
          </p>
        </div>
      </div>
    );
  };
  
  export default WhoWeAre;