import React from 'react'
import {Outlet} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <nav>Navbar</nav>
      <Outlet />
    </div>
  )
}

export default Home