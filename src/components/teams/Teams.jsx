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
        <div className="face">   </div>
        <p className='nme'>mohamed osman</p>
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
        <div className="face">  <img src="/pic/fawaz.jpg" alt="Objective" className='pp'/></div>
        <p className='nme'>fawaz osman abdelrahman</p>
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
        <div className="face"></div>
        <p className='nme'>khaled Abd Alslam</p>
        <div>
        <a className="twr" href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr'/>
      </a>
      <a className="twr" href="https://www.linkedin.com/in/khalid-abd-alslam-567a1727b" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className='twr'/>
      </a>
      </div>
    </div>
    <div className="car">
        <div className="face"><img src="/pic/ehab.jpg" alt="Objective" className='pp'/></div>
        <p className='nme'>Ehab Nasser</p>
        <div className='twr'>
        <a  href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr'/>
      </a>
      <a  href="https://linkedin.com/in/ehab-nasser-3b5972255" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className='twr'/>
      </a>
      </div>
    </div>
    <div className="car">
        <div className="face"></div>
        <p className='nme'>mohamed amin</p>
        <div className='twr'>
        <a  href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
        <TwitterIcon className='twr' />
      </a>
      <a  href="https://twitter.com/MelkeyDev/status/1656176109854285826" target="_blank" rel="noopener noreferrer">
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