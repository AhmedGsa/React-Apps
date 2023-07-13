import React from 'react'
import { useLoaderData } from 'react-router-dom';
import axios from 'axios'
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
const searchCocktailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = "tea"
  const response = await axios.get(`${searchCocktailsUrl}${searchTerm}`)
  return {drinks: response.data.drinks, searchTerm};
}

const Landing = () => {
  const {drinks} = useLoaderData()
  return (
    <div>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </div>
  )
}

export default Landing