import React from 'react'
import {social, links} from '../data'
import { v4 } from 'uuid'
import logo from '../logo.svg'
import {GrClose} from 'react-icons/gr'
import { useGlobalContext } from '../Context'

const Sidebar = () => {
    const {closeSidebar, isSidebarOpen} = useGlobalContext()
  return (
    <div className={isSidebarOpen ? "side-bar open" : "side-bar"}>
        <div className="top">
            <img src={logo}></img>
            <GrClose className='close-icon' onClick={closeSidebar} />
        </div>
        <ul className='links'>
            {links.map((link) => (<li key={link.id}>
                <a href={link.url}>
                    {link.icon} {link.text}
                </a>
            </li>))}
        </ul>
        <div className='social-icons'>
            {social.map((icon) => (
                <a href={icon.url} key={icon.id}>
                    {icon.icon}
                </a>
            ))}
        </div>
    </div>
  )
}

export default Sidebar