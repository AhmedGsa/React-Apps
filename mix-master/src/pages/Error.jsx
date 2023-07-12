import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/not-found.svg'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const {status} = useRouteError()
  if(status === 404) {
    return (
    <Wrapper>
        <img src={img} alt='not-found'></img>
        <h3>The page you are looking for can't be found !</h3>
        <Link to="/">Back Home</Link>
    </Wrapper>
  )
  }
  return <h1>An Error occured !</h1>
}

export default Error