import React from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios'
const searchCocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = "margarita"
  const response = await axios.get(`${searchCocktailsUrl}${searchTerm}`)
  return {drinks: response.data.drinks, searchTerm};
}

const Landing = () => {
  const data = useLoaderData()
  console.log(data);
  return (
    <div>Landing</div>
  )
}

export default Landing