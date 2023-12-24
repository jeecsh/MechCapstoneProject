import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import './hero.css'
const Heroo = () => {
  return (
    <div className="herocont">
        <video src="/video/v1.mp4" autoPlay loop muted />
        <h1>project al shbab</h1>
        <p>what are you waiting for</p>
    <ScrollLink to="gg" smooth={true} duration={500}>
    <button className="btnn" >TAKE A LOOK</button>
    </ScrollLink>
    </div>
  )
}

export default Heroo