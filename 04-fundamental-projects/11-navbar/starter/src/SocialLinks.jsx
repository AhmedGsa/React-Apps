import React from 'react'
import { social } from './data'

const SocialLinks = () => {
  return (
    <div className='social-links'>
        {social.map((link) => <a className='social-link' key={link.id} href={link.url} >{link.icon}</a>)}
    </div>
  )
}

export default SocialLinks