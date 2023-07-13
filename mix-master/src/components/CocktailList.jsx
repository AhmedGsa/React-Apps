import React from 'react'
import CocktailCard from './CocktailCard'
import Wrapper from '../assets/wrappers/CocktailList'

const CocktailList = ({drinks}) => {
  if(!drinks) {
    return <h2>No drinks found !</h2>
  }
  return (
    <Wrapper>
      {drinks.map((drink) => <CocktailCard key={drink.idDrink} drink={drink} />)}
    </Wrapper>
  )
}

export default CocktailList