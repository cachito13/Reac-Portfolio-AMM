import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href="http://github.com" target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href="http://Facebook.com" target='_blank' rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial