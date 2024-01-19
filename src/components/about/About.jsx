import React from 'react'
import './about.css'
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element className="gg">
    <div className='cont' id='gg'>
      <div>
      <img src="/pic/ppp.png" alt="Rolling Image" className="roll"/>
      </div>
<div className="section-content">
      <h2 className='hed2'>About Us</h2>
      <p>Welcome to our project focusing on implementing a Two-Way Meter using IoT and a user-friendly mobile app. As electrical engineering students, our goal is to revolutionize energy monitoring. Our project introduces a smart meter system that not only accurately tracks energy consumption but also allows users to actively manage and optimize their usage. Through our dedication to sustainability and efficiency, we aim to contribute to a more intelligent and eco-friendly energy grid. Join us on this journey towards a future where technology empowers users to make informed decisions for a brighter, more energy-efficient world.</p>
    </div>
     </div>
     </Element>
  )
}

export default About