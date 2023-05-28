import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  /*emailjs*/
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_po5yl3i', 'template_lvkqrhg', form.current, 'NWakMbkDf8BGx9K68')
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>adrianmunoz2005@gmail.com</h5>
            <a href="mailto:dummyadrianmunoz2005@gmail.com" >Send a message</a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Adrian Muñoz</h5>
            <a href="http://m.me/custommotos13/" >Send a message</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 3816758488</h5>
            <a href="https://wa.me/543816758488" >Send a message</a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact