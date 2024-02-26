import React from 'react'
import './Footer.css'
import footer_logo from '../Assest/logo_big.png'
import instagram_icon from '../Assest/instagram_icon.png'
import pintester_icon from '../Assest/pintester_icon.png'
import whatsapp_icon from '../Assest/whatsapp_icon.png'
function Footer() {
  return (
    <div className='footer'>
     <div className='footer-logo'>
     <img src={footer_logo}/>
     <p>GMart</p>     
     </div>
      <ul className='footer-links'>
      <li>Company</li>
      <li>Product</li>
      <li>Offices</li>
      <li>About</li>
      <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
         <div className='footer-icons-'>
         <img src={instagram_icon} alt=""/>
         <img src={pintester_icon} alt=""/>
         <img src={whatsapp_icon} alt=""/>
         
         </div>
      </div>
      <div className='footer-copyright'>
      <hr/>
      <p>copyright @ 2024 - All Right Reserved</p>


      
      </div>
    </div>
  )
}

export default Footer
