import React from 'react'
import logo from '../images/logo.svg'
import {links, socialLinks} from '../data'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.href} className="nav-link"> {link.text} </a>
            </li>
          ))}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} target="_blank" rel="noreferrer" className="nav-icon"
                ><i className={`fab ${link.icon}`}></i
              ></a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar