import React from 'react'
import {links, socialLinks} from '../data'

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href} className="footer-link">{link.text}</a>
          </li>
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <li>
            <a href={link.href} target="_blank" rel="noreferrer" className="footer-icon"
              ><i className={`fab ${link.icon}`}></i
            ></a>
        </li>
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}

export default Footer