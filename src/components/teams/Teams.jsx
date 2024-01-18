import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Element } from 'react-scroll';
import  './teams.css'
const Teams = () => {
  return (
    <Element name="tm">
    <div className='container'>
        
        <h1 className='hh'>Meet our team</h1>
   <div className="cards">
    <div className="car">
        <div className="face"> <img src="/pic/ka.jpg" alt="Objective" className='pp'/></div>
        <p className='nme'>Ahmed salah abdalhi</p>
        <div className='twr'>
        <a  href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr' />
      </a>
      <a  href="https://www.linkedin.com/in/m7md-osman-69492a2a6/" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className='twr'/>
      </a>
      </div>
    </div>
    <div className="car">
        <div className="face">  <img src="/pic/bck.jpg" alt="Objective" className='pp'/></div>
        <p className='nme'>Manhal Mohamed  </p>
        <div className='twr'>
        <a  href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr' />
      </a>
      <a  href="https://www.linkedin.com/in/fawaz-osman-abdelrahman-saddig-3a8504264" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon  className='twr'/>
      </a>
      </div>
    </div>
    <div className="car">
        <div className="face"><img src="/pic/fak.jpg" alt="Objective" className='pp'/></div>
        <p className='nme'>Mowafug mohammed abdalla adam</p>
        <div>
        <a className="twr" href=" https://x.com/_mowafaq1?t=munHmPIh_t7VGtcN6ViiCQ&s=09" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr'/>
      </a>
      <a className="twr" href="https://www.linkedin.com/in/mowafaq-mohammed-b58884291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className='twr'/>
      </a>
      </div>
    </div>
    <div className="car">
        <div className="face"><img src="/pic/mk.jpg" alt="Objective" className='pp'/></div>
        <p className='nme'>Mohamed abubaker m. abusoba </p>
        <div className='twr'>
        <a  href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr'/>
      </a>
      <a  href="https://linkedin.com/in/ehab-nasser-3b5972255" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className='twr'/>
      </a>
      </div>
    </div>
  
    
   </div>
    </div>
    </Element >
  )
}

export default Teams