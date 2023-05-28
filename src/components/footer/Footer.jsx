import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>Adrian Muñoz</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="http://facebook.com"><AiFillFacebook/></a>
      <a href="http://instagram.com"><AiFillInstagram/></a>
      <a href="http://tweeter.com"><AiFillTwitterCircle/></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Adrian Muñoz All rights reserved</small>
    </div>
   </footer>
  )
}

export default Footer