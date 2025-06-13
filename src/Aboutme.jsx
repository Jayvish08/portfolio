import React from 'react';
import './HeroSection.css';
import image from './assets/image.png';
import TechStack from './TechStack';
import ContactMe from './socialHandle';

const AboutMe = () => {
  return (
    <div className="hero-section" id="about">
      <div className="hero-content">
        <h2>Hello! My name is Jay Vishwakarma</h2>
        <p className='bio'>
        I am a self-taught programmer with a passion for learning and exploring new technologies. I have a strong background in BackEnd Development and improving full-stack development and am always eager to expand my skillset and take on new challenges. In my free time, I enjoy sipping on a cup of tea (or coffee) and watching a game of cricket. As a dedicated and driven individual, I am constantly seeking out opportunities to grow and improve as a programmer.
        </p>
        <h3>Some of the tech stack I know</h3>
        <TechStack/>
      </div> <div className="about-photo">
        <ContactMe/>
        <img src={image} alt="Jay" />
      </div>
    </div>
  );
};

export default AboutMe;