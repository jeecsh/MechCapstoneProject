import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import './hero.css'
const Heroo = () => {
  return (
    <div className="herocont">
        <video src="/video/vb.mp4" autoPlay loop muted />
        <h1>BiPowerTracker</h1>
        <h2>Graduation project</h2>
        <p>SO WHAT ARE YOU WAITING FOR !</p>
    <ScrollLink to="gg" smooth={true} duration={500}>
    <button className="btnn" >TAKE A LOOK</button>
    </ScrollLink>
    </div>
  )
}

export default Heroo