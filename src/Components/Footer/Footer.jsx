import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=''/>
        <p>Shopper</p>
      </div>
      <ul className='footer-ul'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>contact</li>
      </ul>
      <div className='footer-social-icon'>
          <div className="footer-icons-containar">
            <img src={instagram_icon} alt=''/>
         </div>
         <div className="footer-icons-containar">
            <img src={pintester_icon} alt=''/>
         </div>
         <div className="footer-icons-containar">
            <img src={whatsapp} alt=''/>
         </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>CopyRight @ 2023 - All Right reserverd </p>
      </div>
    </div>
  )
}

export default Footer
