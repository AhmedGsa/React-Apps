import React from 'react'
import { useGlobalContext } from '../Context'
import sublinks from '../data'

const Submenu = () => {
  const {pageId} = useGlobalContext()
  const link = sublinks.find((link) => link.pageId === pageId)
  return (
    <div className={pageId ? 'submenu show-submenu' : 'submenu'}>
      <h5>{link?.page}</h5>
      <div className="submenu-links">
        {link?.links.map((sublink) => <a key={sublink.id} href={sublink.url}>
          {sublink.icon} 
          {sublink.label}
        </a>)}
      </div>
    </div>
  )
}

export default Submenu