import React from 'react'
import {Outlet, useNavigation} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  const {state} = useNavigation()
  const isLoading = state === "loading";
  const someInfo = "someInfo"
  return (
    <div>
      <Navbar />
      <section className="page">
        {isLoading ? <div className='loading'>Loading</div> : <Outlet context={{someInfo}} />}
      </section>
    </div>
  )
}

export default Home