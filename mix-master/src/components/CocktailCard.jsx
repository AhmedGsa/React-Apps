import React from 'react'
import Wrapper from '../assets/wrappers/CocktailCard'
import {Link} from 'react-router-dom'

const CocktailCard = ({drink}) => {
  return (
    <Wrapper>
        <div className="img-container">
            <img src={drink.strDrinkThumb} alt='cocktail-img'></img>
        </div>
        <div className="footer">
            <h4>{drink.strDrink}</h4>
            <h5>{drink.strGlass}</h5>
            <p>{drink.strAlcoholic}</p>
            <Link to={`/cocktail/${drink.idDrink}`} className="btn">Details</Link>
        </div>
    </Wrapper>
  )
}

export default CocktailCard