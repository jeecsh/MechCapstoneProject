import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './hero.css';
import videoBackground from "/Users/jecsh/capston mech/react/public/video/vb.mp4";

const Heroo = () => {
  return (
    <div className="herocont">
      <video autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>BiPowerTracker</h1>
      <h2>Graduation project</h2>
      <p>SO WHAT ARE YOU WAITING FOR !</p>
      <ScrollLink to="gg" smooth={true} duration={500}>
        <button className="btnn">TAKE A LOOK</button>
      </ScrollLink>
    </div>
  );
}

export default Heroo;
