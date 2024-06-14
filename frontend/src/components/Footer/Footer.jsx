import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import insta_icon from '../Assets/instagram_icon.png'
import whats_icon from '../Assets/whatsapp_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-part-1">
            <h2>CONTACT US</h2>
        </div>

        <div className="footer-part-2">
            <div className='footer-part-2-1'>
                <h3>FLEXO</h3>
                <p>@ 2024|Thakur College of Engineering</p>
                <p>and Technology</p>
                <p>Kandivali East</p>
                <p>Mumbai</p>
                <p>deepakyadav20011114@gmail.com</p>
            </div>


            <div className="footer-part-2-2">
                <h3>FOLLOW US ON</h3>
                <div className="social-handles">
                    <img src={insta_icon}alt="" />
                    <img src={whats_icon}alt="" onClick={() => window.open('https://wa.me/918779889761?text=Hello!', '_blank')} />
                    <img src={pinterest_icon}alt="" />
                </div>
                <p>By using this site, you agree to the Terms of use and Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer