import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import RecomendedCard from './RecomendedCard';
import StartRecipeButton from '../Components/StartRecipeButton';
import FavButton from '../Components/FavButton';
import ShareButton from '../Components/ShareButton';
import fetchDrinkDetails from '../Services/drinkDetailsApi';
import useFoods from '../Hooks/useFoods';
import './DetailsPage.css';

function DrinkDetails({ match: { params: { id } } }) {
  const fetchFoods = useFoods();
  const recomendedNumber = 6;
  const recomendedMeals = fetchFoods.slice(0, recomendedNumber);
  const [recipe, setRecipe] = useState({});
  const ingredientsKeys = [];
  const measurmentKey = [];
  const urlShare = window.location.href;

  useEffect(() => {
    function fetchRecipe() {
      fetchDrinkDetails(id).then((response) => {
        setRecipe(...response.drinks);
      });
    }
    fetchRecipe();
  }, [id]);

  function renderIngredients() {
    Object.keys(recipe).map((key) => {
      if (key.includes('Ingredient') && recipe[key] && recipe[key] !== '') {
        ingredientsKeys.push(key);
      }
      if (key.includes('Measure')) {
        measurmentKey.push(key);
      }
      return (
        ingredientsKeys, measurmentKey
      );
    });
    return (
      ingredientsKeys.map((ingredient, index) => (
        <li
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          { `${recipe[ingredient]} ${recipe[measurmentKey[index]]}`}
        </li>
      ))
    );
  }

  function renderRecomendation() {
    return (
      recomendedMeals.map((meal, index) => (
        <RecomendedCard
          key={ index }
          foods={ meal }
          index={ index }
          str="strMeal"
          thumb="strMealThumb"
        />
      ))
    );
  }

  return (
    <>
      <img
        src={ recipe.strDrinkThumb }
        alt="drink"
        data-testid="recipe-photo"
        className="recipe-photo"
      />
      <section>
        <span data-testid="recipe-title">{ recipe.strDrink }</span>
        <ShareButton testid="share-btn" urlShare={ urlShare } />
        <FavButton recipe={ recipe } testId="favorite-btn" />
      </section>
      <section>
        <span data-testid="recipe-category">
          { `${recipe.strCategory} - ${recipe.strAlcoholic}` }
        </span>
        <ul>
          Ingredients
          { renderIngredients() }
        </ul>
        <div data-testid="instructions">
          { recipe.strInstructions }
        </div>
      </section>
      <section className="recomended-conteiner">
        { renderRecomendation() }
      </section>
      <StartRecipeButton recipe={ recipe } idType="idDrink" />
    </>
  );
}

DrinkDetails.propTypes = {
  match: PropType.shape({
    params: PropType.objectOf(PropType.string).isRequired,
  }).isRequired,
};

export default DrinkDetails;
