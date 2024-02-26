import React from 'react'
import './Hero.css'
import Hand from '../Assest/Hand.png'
import Arrow from '../Assest/Arrow.png'
import Heroimg from '../Assest/Heroimg.png'

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
       <h2>NEW ARRIVALS ONLY</h2>
       <div>
          <div className='hero-hand-icon'>
           <p>New</p>
          <img src={Hand} alt='New'/>
          </div>
          <p>Collection</p>
          <p>for everyone</p>
       </div>
       <div className='hero-latest-btn'>
         <div> Latest Colection </div>
         <img src={Arrow} alt='Colection'/>  
       </div>
       </div>
      <div className='hero-right'>
      <img src={Heroimg} alt=''/>
      
      </div>

    </div>
  )
}

export default Hero
