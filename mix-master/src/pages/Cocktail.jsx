import axios from "axios";
import React from "react";
import Wrapper from "../assets/wrappers/CocktailPage";
import { Link, useLoaderData } from "react-router-dom";

const fetchCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${fetchCocktailUrl}${id}`);
  return { cocktail: data.drinks[0], id };
};

const Cocktail = () => {
  const { id, cocktail } = useLoaderData();
  console.log(cocktail);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back home
        </Link>
        <h2>{cocktail.strDrink}</h2>
      </header>
      <div className="drink">
        <img className="img" src={cocktail.strDrinkThumb}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {cocktail.strDrink}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {cocktail.strCategory}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {cocktail.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {cocktail.strGlass}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {cocktail.strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
