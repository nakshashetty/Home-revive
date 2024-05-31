import React from 'react';
import aboutImage from '../assets/aboutimage.png'; // Import your about image
import '../styles/AboutPage.css'; // Import your CSS file

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <h2>About Home Revive</h2>
      <div className="about-content">
        <img src={aboutImage} alt="Home Revive" className="about-image" />
        <div className="about-text">
          <p>
            Welcome to Home Revive, your go-to destination for all things related to home renovation
            and interior design.
          </p>
          <p>
            At Home Revive, we believe in transforming houses into dream homes. Our team of experts
            is dedicated to providing innovative solutions and quality services that breathe new life
            into your living spaces.
          </p>
          <p>
            Whether you're looking for architectural marvels or stylish furniture pieces, we've got
            you covered. Explore our collections and let your imagination shape the future of your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;