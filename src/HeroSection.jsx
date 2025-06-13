import React from 'react';
import './HeroSection.css';
import profilePhoto from './assets/profile.png';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div className="hero-section" id="home">
     
      <div className="hero-content">
        <h1>Hi, I'm Jay Vishwakarma</h1>
        <h2 className='MERN'>MERN Stack Developer | Java Developer</h2>
        <p>
        I like to build Interactive things for web.
        </p>
        <Link
              to="contact" // ID of the Contact Section
              smooth={true}
              offset={-70} // Adjust for fixed navbar height
              duration={500}
            >
        <Button variant="contained"
        className='hero-button'
        >
          Hire Me
        </Button>
      </Link>

        <Button
        className='hero-button'
        variant="contained"
         href="https://drive.google.com/file/d/1KApO2wzkIukpCK3-QBcxhQ-tvKImbaH7/view?usp=drive_link" // Change this to your actual resume URL
         target="_blank"
        >Download Resume</Button>
      </div> <div className="hero-photo">
        <img src={profilePhoto} alt="Jay" />
      </div>
    </div>
  );
};

export default HeroSection;