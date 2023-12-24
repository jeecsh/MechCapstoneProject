import React from 'react'
import './about.css'
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element name="gg">
    <div className='cont' id='gg'>
      <div>
      <img src="/pic/p1.png" alt="Rolling Image" class="roll"/>
      </div>
<div class="section-content">
      <h2 className='hed2'>about us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Facere earum magni quae placeat architecto reiciendis tempore
          optio illum asperiores, molestiae harum quos aliquam perferendis, sed eius tempora dolorem quasi. Quia?</p>
    </div>
     </div>
     </Element>
  )
}

export default About