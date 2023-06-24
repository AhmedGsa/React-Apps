import React from 'react'
import { links } from './data'

const NavLinks = ({showLinks}) => {
  return (
    <div className={showLinks ? 'nav-links' : "nav-links hide-links"}>
        {links.map((link) => <a className='nav-link' key={link.id} href={link.url}>{link.text}</a>)}
    </div>
  )
}

export default NavLinks